import { Controller, Post, Body } from '@nestjs/common';
import { MarginService } from './margin.service';
import { CalculateMarginDto } from './dto/calculate-margin.dto';

@Controller('margin')
export class MarginController {
  constructor(private readonly marginService: MarginService) {}

  @Post('calculate')
  async calculateMargin(@Body() data: CalculateMarginDto) {
    return this.marginService.calculateMargin(data);
  }
}
