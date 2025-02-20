import { Module } from '@nestjs/common';
import { MarginService } from './margin.service';
import { MarginController } from './margin.controller';
import { SupabaseService } from '../database/supabase.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [MarginService, SupabaseService],
  controllers: [MarginController],
})
export class MarginModule {}
