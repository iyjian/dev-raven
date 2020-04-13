import { Injectable, HttpService, Logger } from '@nestjs/common';
import { GitLabHookService } from './gitlab.service';
import { AliyunDockerHookService } from "./aliyun.service";
import { GitHubHookService } from "./github.service";
import { HookParse } from "../interfaces";
import { HookFrom } from '../interfaces';
import { Observable, empty, of } from "rxjs";
import { UrlService } from './url.service';
import { tap, switchMap, retry, catchError } from "rxjs/operators";

@Injectable()
export class HookService {
  private readonly services: Map<HookFrom, HookParse>
  constructor(
    private readonly gitLabHookService: GitLabHookService,
    private readonly gitHubHookService: GitHubHookService,
    private readonly aliyunDockerHookService: AliyunDockerHookService,
    private readonly http: HttpService,
    private readonly urlService: UrlService,
  ) {
    this.services = new Map<HookFrom, HookParse>()
    this.services.set(HookFrom["GITHUB"], this.gitHubHookService)
    this.services.set(HookFrom["GITLAB"], this.gitLabHookService)
    this.services.set(HookFrom["ALIYUNDOCKER"], this.aliyunDockerHookService)
  }

  getService(name: string): HookParse {
    return this.services.get(HookFrom[name])
  }

  toHook(to: string, msg: string): Observable<any> {
    return to ? this.urlService.shortenUrl(to).pipe(
      switchMap((data) => this.http.post(data, msg).pipe(
        catchError(err => {
          Logger.error(err)
          return empty()
        })
      ))
    ) : empty()
  }
}