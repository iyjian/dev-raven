import { Injectable, HttpService, Inject, Logger } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators'
import { CONFIG_PROIVDE } from '../config';

@Injectable()
export class UrlService {
  constructor(
    @Inject(CONFIG_PROIVDE) private readonly config,
    private readonly http: HttpService,
  ) { }

  shortenUrl(url: string): Observable<string> {
    if (this.config.shortenUrlBase) {
      return this.http.post(this.config.shortenUrlBase, { 'long_url': url }).pipe<any, string, string>(
        retry(3),
        map(res => res.data.short_url),
        catchError(err => {
          Logger.error(err)
          return url
        }),
      )
    } else {
      return of(url)
    }
  }
}