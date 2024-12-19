import { Controller, Query, Post, Body, Get, Logger, Req } from '@nestjs/common';
import {Request} from 'express'
import { EventType } from './core/decorators';
import { SourcePlatform } from './interfaces';
import {
  NotifyMessage,
  TransformerService,
} from './transformer/transformer.service';
import { SenderService } from './sender/sender.service';
import jmespath from 'jmespath'

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
    @Query('filter') filter?: string,
    @EventType() eventType?: string,
    @Body() payload?: any,
  ): Promise<NotifyMessage> {
    const contentType = req.get('Content-Type')
    const targetType = this.transformService.getTargetType(to);

    this.logger.debug(
      `事件来源: ${from} 事件类型: ${eventType} 发送目标: ${to} 发送类型: ${targetType} contentType: ${contentType}`,
    );
  
    let transformerPayload = payload;
  
    if (from === 'gitlab' && contentType === 'application/json') {
      // 根据GitLab的事件类型处理payload
      if (eventType === 'issue' && payload.object_attributes && payload.object_attributes.labels) {
        // 对于issue类型的事件，标签可能在object_attributes中
        transformerPayload = { ...payload, labels: payload.object_attributes.labels };
      } else if (eventType === 'note' && payload.issue && payload.issue.labels) {
        // 对于note（评论）类型的事件，标签可能在issue对象中
        transformerPayload = { ...payload, labels: payload.issue.labels };
      }
    }
  
    const transformer = this.transformService.getTransformer(from, eventType).bind(this.transformService);
    const notifyMessage = transformer(transformerPayload);
  
    // 应用过滤器逻辑
    if (filter) {
      const filtered = jmespath.search(transformerPayload, filter)
      if (!filtered || filtered.length === 0) {
        this.logger.debug(`事件来源: ${from} 事件类型: ${eventType} 发送目标: ${to} 发送类型: ${targetType} contentType: ${contentType} - 已忽略`)
        return notifyMessage
      }
    }

    switch (targetType) {
      case 'email':
        this.senderService.sendMail(
          to,
          notifyMessage.title,
          notifyMessage.content,
        );
        break;
      case 'wechatGroup':
        this.senderService.sendWechatGroup(to, notifyMessage.content).catch((e) => {
          console.log(e.message)
        });
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
