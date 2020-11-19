import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { HookFrom } from '../interfaces';

const eventToMethod = {
  'Push Hook': 'push',
  'Tag Push Hook': 'tagPush',
  'Issue Hook': 'issue',
  'Note Hook': 'note',
  'Merge Request Hook': 'mergeRequest',
  'Wiki Page Hook': 'wikiPage',
  'Pipeline Hook': 'pipeline',
  'Job Hook': 'job',
};

export const From = createParamDecorator((data: any, ctx: ExecutionContext) => {
  const request: Request = ctx.switchToHttp().getRequest();
  const from: string = request.query.from as string;
  const hookFrom: HookFrom = HookFrom[from.toUpperCase()];
  if (!hookFrom) {
    throw new HttpException(
      'not supported from param, only github, gitlab, aliyundocker are supported.',
      HttpStatus.NOT_FOUND,
    );
  }

  return hookFrom;
})

export const HookEvent = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    const gitHub: string = request.get('X-GitHub-Event');
    let gitlab: string = request.get('X-Gitlab-Event')
      ? eventToMethod[request.get('X-Gitlab-Event')]
      : '';
    const defaultOther = '';
    return gitHub || gitlab || defaultOther;
  },
);