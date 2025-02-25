import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CacheController } from './cache/cache.controller';
import { CacheService } from './cache/cache.service';
import configuration from './config/configuration';

@Module({
  imports: [ConfigModule.forRoot({ load: [configuration] })],
  controllers: [AppController, CacheController],
  providers: [AppService, CacheService],
})
export class AppModule {}
