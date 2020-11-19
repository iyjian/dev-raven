import { Injectable } from '@nestjs/common';
import { HookParse } from '../interfaces';
import { UrlService } from './url.service';

@Injectable()
export class RawHookService implements HookParse {
  constructor(private readonly urlService: UrlService) {}

  async parse(data: any, event: string): Promise<string> {
    console.log(data, event)
    if (this[event]) {
      return this[event](data, event);
    }
    return 'hello world';
  }

}
