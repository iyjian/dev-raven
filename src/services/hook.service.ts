import { Injectable, HttpService, Logger, Inject } from '@nestjs/common';

import { GitLabHookService } from './gitlab.service';
import { AliyunDockerHookService } from './aliyun.service';
import { GitHubHookService } from './github.service';
import { RawHookService } from './raw.service';

import { HookParse } from '../interfaces';
import { HookFrom } from '../interfaces';
import { Observable, empty } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CONFIG_PROIVDE } from '../config';

@Injectable()
export class HookService {
  private readonly services: Map<HookFrom, HookParse>;
  constructor(
    // 四种parse回调内容的服务，这里我觉得写的不要，干嘛要抽出来，直接放在下面的getService里就好了嘛
    private readonly gitLabHookService: GitLabHookService,
    private readonly gitHubHookService: GitHubHookService,
    private readonly aliyunDockerHookService: AliyunDockerHookService,
    private readonly rawHookService: RawHookService,
    // 封装了用来在to里发http请求的服务
    private readonly http: HttpService,
    @Inject(CONFIG_PROIVDE) private readonly config,
  ) {
    this.services = new Map<HookFrom, HookParse>();
    this.services.set(HookFrom['GITHUB'], this.gitHubHookService);
    this.services.set(HookFrom['GITLAB'], this.gitLabHookService);
    this.services.set(HookFrom['ALIYUNDOCKER'], this.aliyunDockerHookService);
    this.services.set(HookFrom['RAW'], this.rawHookService);
  }
  
  // 获取parse回调地址的方法
  getService(name: string): HookParse {
    return this.services.get(HookFrom[name]);
  }

  toHook(to: string, msg: string): Observable<any> {
    console.log(to, msg)
    if (!to) {
      console.log(`hook.service.ts - toHook - noTarget - to: ${to}`)
      return empty();
    }
    if (this._isWechatWork(to)) {
      // 企业微信的通知
      console.log(`hook.service.ts - toHook - _isWechatWork - to: ${to}`)
      return this._sendWechatWorkCallback(to, msg);
    }
    else if(this._isWechatMp(to)){
      // 微信公众号的hook
      console.log(`hook.service.ts - toHook - _isWechatMp - to: ${to}`)
      return this._sendWechatMpCallback(to, msg);
    }
    else {
      // 默认是用我自己做的微信通知
      console.log(`hook.service.ts - toHook - _sendDefaultCallback - to: ${to}`)
      return this._sendDefaultCallback(to, msg);
    }
  }

  private _isWechatWork(to: string) {
    return to.includes(this.config.wechatWorkHost);
  }

  private _isWechatMp(to: string){
    return to.includes(this.config.wechatMpHost);
  }

  private _sendDefaultCallback(to: string, msg: string): Observable<any> {
    return this.http
      .get(to, {
        params: {
          content: msg,
        },
      })
      .pipe(
        retry(3),
        catchError(err => {
          Logger.error(err);
          return empty();
        }),
      );
  }

  private _sendWechatWorkCallback(to: string, msg: string): Observable<any> {
    return this.http
      .post(to, {
        msgtype: 'text',
        text: {
          content: msg,
        },
      })
      .pipe(
        retry(3),
        catchError(err => {
          Logger.error(err);
          return empty();
        }),
      );
  }

  private _sendWechatMpCallback(to:string, msg: string): Observable<any>{
    return this.http
        .get(to,{
          params:{
            title: msg.split(/\n/)[0],
            content: msg
          }
        })
  }
}
