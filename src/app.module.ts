import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import {
  HookService,
  GitLabHookService,
  GitHubHookService,
  AliyunDockerHookService,
  UrlService,
} from './services';
import { CONFIG_PROIVDE } from './config';
import { config } from './config';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    HookService,
    GitLabHookService,
    GitHubHookService,
    AliyunDockerHookService,
    UrlService,
    {
      provide: CONFIG_PROIVDE,
      useValue: config,
    },
  ],
})
export class AppModule {}
