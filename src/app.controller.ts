import { Controller, Query, Post, Body } from '@nestjs/common';
import { From, HookEvent } from './decorators';
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
    @HookEvent() hookEvent?: string,
  ): Promise<string> {
    if(!hookEvent) return '';
    const msg = await this.hookService.getService(from).parse(data, hookEvent);
    if (msg) {
      this.hookService.toHook(decodeURIComponent(to), msg).subscribe();
    }
    return msg;
  }
}
