import { Controller, Query, Post, Body } from '@nestjs/common';
import { From } from './decorators';
import { HookFrom, GithubData, AliyunData } from './interfaces';
import { HookService } from './services';

@Controller()
export class AppController {
  constructor(private readonly hookService: HookService) {}

  @Post('')
  async getHello(
    @From() from: HookFrom,
    @Query('to') to: string,
    @Body() data: GithubData | AliyunData
  ): Promise<string> {
    const msg = await this.hookService.getService(from).parse(data, from);
    if (msg) {
      this.hookService.toHook(decodeURIComponent(to), msg).subscribe();
    }
    return msg;
  }
}
