import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SupabaseService } from './database/supabase.service';
import { MarginModule } from './margin/margin.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MarginModule,
  ],
  providers: [SupabaseService],
  exports: [SupabaseService],
})
export class AppModule {}
