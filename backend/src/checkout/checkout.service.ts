import { Injectable, NotFoundException } from '@nestjs/common';
import { CheckoutDto } from './checkout.dto';
import { v4 as uuidv4 } from 'uuid';
import { checkoutFieldValidators } from './checkout.validator';

export type CheckoutEntity = CheckoutDto & { id: string };

@Injectable()
export class CheckoutService {
  private checkouts: CheckoutEntity[] = [];

  create(data: CheckoutDto): CheckoutEntity {
    const checkout = { ...data, id: uuidv4() };
    this.checkouts.push(checkout);
    return checkout;
  }

  findAll(): CheckoutEntity[] {
    return this.checkouts;
  }

  findOne(id: string): CheckoutEntity {
    const checkout = this.checkouts.find((c) => c.id === id);
    if (!checkout) throw new NotFoundException('Checkout not found');
    return checkout;
  }

  update(id: string, data: CheckoutDto): CheckoutEntity {
    const index = this.checkouts.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Checkout not found');
    this.checkouts[index] = { ...data, id };
    return this.checkouts[index];
  }

  remove(id: string): CheckoutEntity {
    const index = this.checkouts.findIndex((c) => c.id === id);
    if (index === -1) throw new NotFoundException('Checkout not found');
    const [removed] = this.checkouts.splice(index, 1);
    return removed;
  }

  validator() {
    return checkoutFieldValidators;
  }
}
