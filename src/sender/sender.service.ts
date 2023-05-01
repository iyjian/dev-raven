import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import nodemailer from 'nodemailer';
import axios from 'axios';

@Injectable()
export class SenderService {
  private transporter: nodemailer.Transporter;

  constructor(private readonly configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      service: 'QQ',
      auth: {
        user: this.configService.get('mail.user'),
        pass: this.configService.get('mail.pass'),
      },
    });
  }

  // 发送到邮件
  sendMail(to: string, subject: string, content: string): Promise<any> {
    /**
     * https://nodemailer.com/message/
     */
    const info = this.transporter.sendMail({
      from: this.configService.get('mail.sender'),
      to,
      subject,
      text: content,
      // html: "<b>Hello world?</b>",
      // attachments: [{
      // filename: '',
      // content: Buffer / File Path / ReadStream
      // }]
    });
    return info;
  }

  // 发送到个人微信群
  sendWechatGroup(to: string, msg: string) {
    return axios.post(to, {
      content: msg,
    });
  }

  // 发送到企业微信
  sendWecomGroup(to: string, msg: string) {
    return axios.post(to, {
      msgtype: 'text',
      text: {
        content: msg,
      },
    });
  }

  // 发送到微信公众号
  sendWechatOfficialAccount(to: string, msg: string) {
    return axios.get(to, {
      params: {
        title: msg.split(/\n/)[0],
        content: msg,
      },
    });
  }
}
