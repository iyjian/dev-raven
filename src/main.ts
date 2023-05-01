import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import express from 'express';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './core/exception.filter';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    // bodyParser: false,
  });
  app.set('trust proxy', true);
  app.set('etag', false);
  app.useGlobalFilters(new AllExceptionFilter());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(compression());
  app.use(morgan('combined'));
  app.use(helmet());

  await app.listen(3000);
}
bootstrap();
