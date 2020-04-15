import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'
import * as morgan from 'morgan'
import * as helmet from 'helmet'
import * as compression from 'compression'
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.set('trust proxy', true)
  app.set('etag', false)
  app.use(compression())
  app.use(morgan('combined'))
  app.use(helmet())
  await app.listen(3000);
}
bootstrap();
