import { Controller, Query, Post, Body, Get, Logger, Req } from '@nestjs/common';
import {Request} from 'express'
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
    @Req() req: Request,
    @Query('from') from: SourcePlatform,
    @Query('to') to?: string,
    @EventType() eventType?: string,
    @Body() payload?: any,
  ): Promise<NotifyMessage> {
    const contentType = req.get('Content-Type')
    const targetType = this.transformService.getTargetType(to);

    this.logger.debug(
      `事件来源: ${from} 事件类型: ${eventType} 发送目标: ${to} 发送类型: ${targetType} contentType: ${contentType}`,
    );

    const transformer = this.transformService.getTransformer(from, eventType);

    if (from === 'github' && req.get('Content-Type') === 'application/x-www-form-urlencoded') {
      // 兼容github application/x-www-form-urlencoded 回调
      payload = JSON.parse(payload.payload)
    }

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
