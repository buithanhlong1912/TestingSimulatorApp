import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor(private configService: ConfigService) {
    const supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    const supabaseKey = this.configService.get<string>('SUPABASE_KEY');

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase credentials are missing!");
    }

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  async saveMargin(data: any): Promise<void> {
    const { error } = await this.supabase.from('margins').insert([data]);
    if (error) {
        console.error("Supabase Insert Error:", error.message);
        throw new Error(`Database Insertion Failed: ${error.message}`);
      }
  }
}
