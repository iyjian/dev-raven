/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { HookParse, AliyunData } from '../interfaces';

/*
Headers:

Content-Type: application/json
Request URL: https://raven.bidwin.top?from=aliyundocker&to=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=99314f2a-8bb7-4a60-a0fa-e503f46d08b6, 
Request method: POST

Body

{
  "push_data": {
    "digest": "sha256:bb7d38140b7c3e9aa1fc0403f915bbd89a22799aaea5d7d1f25652953bc3df8a",
    "pushed_at": "2020-08-11 10:15:13",
    "tag": "latest"
  },
  "repository": {
    "date_created": "2020-08-10 13:18:38",
    "name": "autobid-ali",
    "namespace": "iyjian-softwares",
    "region": "cn-shanghai",
    "repo_authentication_type": "NO_CERTIFIED",
    "repo_full_name": "iyjian-softwares/docker-ali",
    "repo_origin_type": "NO_CERTIFIED",
    "repo_type": "PUBLIC"
  }
}
*/
@Injectable()
export class AliyunDockerHookService implements HookParse {
  async parse(data: AliyunData): Promise<string> {
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
