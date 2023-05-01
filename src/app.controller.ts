import { Controller, Query, Post, Body, Get, Logger } from '@nestjs/common';
import { EventType } from './core/decorators';
import { SourcePlatform } from './interfaces';
import {
  NotifyMessage,
  TransformerService,
} from './transformer/transformer.service';
import { SenderService } from './sender/sender.service';

@Controller('')
export class AppController {
  private readonly logger = new Logger(AppController.name);
  constructor(
    private readonly transformService: TransformerService,
    private readonly senderService: SenderService,
  ) {}

  @Post('')
  async raven(
    @Query('from') from: SourcePlatform,
    @Query('to') to?: string,
    @EventType() eventType?: string,
    @Body() payload?: any,
  ): Promise<NotifyMessage> {
    console.log(payload);
    const targetType = this.transformService.getTargetType(to);

    this.logger.debug(
      `事件来源: ${from} 事件类型: ${eventType} 发送目标: ${to} 发送类型: ${targetType}`,
    );

    const transformer = this.transformService.getTransformer(from, eventType);

    const notifyMessage = transformer(payload);

    switch (targetType) {
      case 'email':
        this.senderService.sendMail(
          to,
          notifyMessage.title,
          notifyMessage.content,
        );
        break;
      case 'wechatGroup':
        this.senderService.sendWechatGroup(to, notifyMessage.content);
        break;
      case 'wecomGroup':
        this.senderService.sendWecomGroup(to, notifyMessage.content);
        break;
      case 'blackhole':
        break;
      default:
        break;
    }

    return notifyMessage;
  }

  @Get('help')
  async getHelp(): Promise<string> {
    return `it is a help`;
  }
}
