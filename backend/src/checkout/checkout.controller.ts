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
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly checkoutService: CheckoutService) {}

  @Get('schema')
  getSchema() {
    const schemas = validationMetadatasToSchemas();
    return schemas['CheckoutDto'];
  }

  @Get('get-validators')
  getCheckoutValidators() {
    return this.checkoutService.validator();
  }

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
