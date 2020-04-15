import { Controller, Query, Post, Body } from '@nestjs/common';
import { From, GithubEvent } from './decorators';
import { HookFrom, GithubData, AliyunData } from './interfaces';
import { HookService } from './services/hook.service';

@Controller()
export class AppController {
  constructor(
    private readonly hookService: HookService,
  ) { }

  @Post()
  getHello(
    @From() from: HookFrom, 
    @Query('to') to: string, 
    @Body() data: GithubData | AliyunData,
    @GithubEvent() githubEvent?: string,
  ): string {
    const msg = this.hookService.getService(from).parse(data, githubEvent)
    this.hookService.toHook(to, msg).subscribe()
    return to ? msg : 'dummy'
  }
}
