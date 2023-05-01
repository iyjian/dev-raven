import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

const gitlabEventMapping = {
  'Push Hook': 'push',
  'Tag Push Hook': 'tagPush',
  'Issue Hook': 'issue',
  'Note Hook': 'note',
  'Merge Request Hook': 'mergeRequest',
  'Wiki Page Hook': 'wikiPage',
  'Pipeline Hook': 'pipeline',
  'Job Hook': 'job',
};

export const EventType = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    return (
      request.get('X-GitHub-Event') ||
      gitlabEventMapping[request.get('X-Gitlab-Event')] ||
      ''
    );
  },
);
