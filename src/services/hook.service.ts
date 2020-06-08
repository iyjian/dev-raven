import { Injectable, HttpService, Logger, Inject } from '@nestjs/common';
import { GitLabHookService } from './gitlab.service';
import { AliyunDockerHookService } from './aliyun.service';
import { GitHubHookService } from './github.service';
import { HookParse } from '../interfaces';
import { HookFrom } from '../interfaces';
import { Observable, empty } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CONFIG_PROIVDE } from '../config';

@Injectable()
export class HookService {
  private readonly services: Map<HookFrom, HookParse>;
  constructor(
    private readonly gitLabHookService: GitLabHookService,
    private readonly gitHubHookService: GitHubHookService,
    private readonly aliyunDockerHookService: AliyunDockerHookService,
    private readonly http: HttpService,
    @Inject(CONFIG_PROIVDE) private readonly config,
  ) {
    this.services = new Map<HookFrom, HookParse>();
    this.services.set(HookFrom['GITHUB'], this.gitHubHookService);
    this.services.set(HookFrom['GITLAB'], this.gitLabHookService);
    this.services.set(HookFrom['ALIYUNDOCKER'], this.aliyunDockerHookService);
  }

  getService(name: string): HookParse {
    return this.services.get(HookFrom[name]);
  }

  toHook(to: string, msg: string): Observable<any> {
    if (!to) {
      return empty();
    }
    if (this._isWechatWork(to)) {
      return this._sendWechatWorkCallback(to, msg);
    } else {
      return this._sendDefaultCallback(to, msg);
    }
  }

  private _isWechatWork(to: string) {
    return to.includes(this.config.wechatWorkHost);
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
}
