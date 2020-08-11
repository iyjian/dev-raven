/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { HookParse, AliyunData } from '../interfaces';

@Injectable()
export class AliyunDockerHookService implements HookParse {
  async parse(data: AliyunData): Promise<string> {
    console.log('data', data, '---------------------')
    const { repository, push_data } = data;
    const message = `[aliyun docker service]
      [region]: ${repository.region}
      [${repository.repo_full_name}:${push_data.tag}] has been pushed at:
      ${push_data.pushed_at}
      `;
    return message
      .split(/\n/)
      .map(o => o.trim())
      .join('\n');
  }
}
