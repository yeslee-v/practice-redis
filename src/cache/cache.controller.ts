import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CacheService } from './cache.service';

@Controller('cache')
export class CacheController {
  constructor(private readonly cacheService: CacheService) {}

  @Post()
  async setCache(
    @Body('key') key: string,
    @Body('value') value: any,
    @Query('ttl') ttl?: number,
  ) {
    await this.cacheService.set(key, value, ttl);

    return { message: 'Cached successfully', key };
  }

  @Get(':key')
  async getCache(@Param('key') key: string) {
    const value = await this.cacheService.get(key);

    return value ? { key, value } : { message: 'Cache not found' };
  }

  @Delete(':key')
  async deleteCache(@Param('key') key: string) {
    await this.cacheService.del(key);

    return { message: `Cache deleted for key: ${key}` };
  }

  @Delete()
  async flushAll() {
    await this.cacheService.flushAll();

    return { message: 'All cache cleared' };
  }
}
