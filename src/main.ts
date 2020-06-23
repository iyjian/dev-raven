import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as morgan from 'morgan';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as bodyParser from 'body-parser'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bodyParser: false,
  });
  app.set('trust proxy', true);
  app.set('etag', false);
  app.use(bodyParser.urlencoded({ extended: false, limit: '10mb' }))
  app.use(bodyParser.json({limit: '10mb'}))
  app.use(compression());
  app.use(morgan('combined'));
  app.use(helmet());
  await app.listen(3000);
}
bootstrap();
