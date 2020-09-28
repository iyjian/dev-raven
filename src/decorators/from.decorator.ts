import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request } from 'express';
import { HookFrom } from '../interfaces';

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
