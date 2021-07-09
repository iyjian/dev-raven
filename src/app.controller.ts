import { Controller, Query, Post, Body, Get } from '@nestjs/common';
import { From, HookEvent } from './decorators';
import { HookFrom, GithubData, AliyunData } from './interfaces';
import { HookService } from './services';
import getLogger from './libs/log4j';

@Controller('')
export class AppController {
  constructor(private readonly hookService: HookService) {}

  @Post('')
  async getHello(
    @From() from: HookFrom,
    @Query('to') to: string,
    @Body() data: GithubData | AliyunData,
    @HookEvent() hookEvent?: string
  ): Promise<string> {
    const logger = getLogger('gitlab')
    logger.debug(JSON.stringify(data, null, 2))
    /**
     * getService方法依靠from=**从Service里挑一个然后调用这个service的parse方法
     * 
     */
    const msg = await this.hookService.getService(from).parse(data, hookEvent);
    if (msg) {
      /**
       * 把msg按照to里指定的地址发出去
      */
      this.hookService.toHook(decodeURIComponent(to), msg).subscribe();
    }
    return msg;
  }
}
