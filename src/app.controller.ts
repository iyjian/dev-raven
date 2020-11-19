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
    /**
     * getService方法依靠from=**从Service里挑一个然后调用这个service的parse方法
     */
    const msg = await this.hookService.getService(from).parse(data, from);
    if (msg) {
      /**
       * 把msg按照to里指定的地址发出去
      */
      this.hookService.toHook(decodeURIComponent(to), msg).subscribe();
    }
    return msg;
  }
}
