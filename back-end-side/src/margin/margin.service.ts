import { Injectable } from '@nestjs/common';
import { SupabaseService } from '../database/supabase.service';
import { CalculateMarginDto } from './dto/calculate-margin.dto';
import { convertValuesToNumbers } from 'src/utils/utils';

@Injectable()
export class MarginService {
  constructor(private readonly supabaseService: SupabaseService) {}

  async calculateMargin(data: CalculateMarginDto) {
    const formattedData = convertValuesToNumbers(data as any);
    const total_cost = parseFloat((formattedData.monthly_salary * 17.3225 + formattedData.indirect_costs + formattedData.work_insurance + formattedData.health_insurance + formattedData.gym_allowance + formattedData.meal_allowance + formattedData.licenses_software).toFixed(2));
    const margin = parseFloat((formattedData.customer_cost - total_cost).toFixed(2));
    const day_rate = parseFloat((formattedData.customer_cost / 225).toFixed(2));
    const delta = parseFloat((formattedData.current_rate - day_rate).toFixed(2));
    const effective_margin = parseFloat(((margin / formattedData.customer_cost) * 100).toFixed(2));

    const result = {total_cost, margin, day_rate, delta, effective_margin, ...formattedData };
    console.log("Calculated Result:", result);
    await this.supabaseService.saveMargin(result);
    return result;
  }
}
