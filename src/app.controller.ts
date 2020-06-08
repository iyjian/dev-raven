import { Controller, Query, Post, Body } from '@nestjs/common';
import { From, GithubEvent } from './decorators';
import { HookFrom, GithubData, AliyunData } from './interfaces';
import { HookService } from './services';

@Controller()
export class AppController {
  constructor(private readonly hookService: HookService) {}

  @Post('')
  async getHello(
    @From() from: HookFrom,
    @Query('to') to: string,
    @Body() data: GithubData | AliyunData,
    @GithubEvent() githubEvent?: string,
  ): Promise<string> {
    const msg = await this.hookService.getService(from).parse(data, githubEvent);
    if(msg){
      this.hookService.toHook(decodeURIComponent(to), msg).subscribe()
    }
    return msg;
  }
}
