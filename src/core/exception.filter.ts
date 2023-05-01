import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import Sentry from '@sentry/node';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionFilter.name);
  catch(exception: unknown, host: ArgumentsHost) {
    console.log(exception);
    Sentry.captureException(exception);
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();

      const httpStatus =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;

      const errMsg = (
        exception instanceof HttpException
          ? typeof exception.getResponse() === 'string'
            ? exception.getResponse()
            : exception.getResponse()['message']
          : exception instanceof Error
          ? exception.message
          : 'internal error'
      ).toString();

      const responseBody = {
        err: httpStatus,
        errMsg,
      };
      response.json(responseBody);
    }
  }
}
