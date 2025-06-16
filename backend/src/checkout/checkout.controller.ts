import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { CheckoutDto } from './checkout.dto';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Post()
  create(@Body() data: CheckoutDto) {
    return this.checkoutService.create(data);
  }

  @Get()
  findAll() {
    return this.checkoutService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.checkoutService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: CheckoutDto) {
    return this.checkoutService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.checkoutService.remove(id);
  }
}
