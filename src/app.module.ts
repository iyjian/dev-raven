import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SenderModule } from './sender/sender.module';
import { SenderService } from './sender/sender.service';
import { TransformerModule } from './transformer/transformer.module';
import { TransformerService } from './transformer/transformer.service';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    SenderModule,
    TransformerModule,
  ],
  controllers: [AppController],
  providers: [SenderService, TransformerService],
})
export class AppModule {}
