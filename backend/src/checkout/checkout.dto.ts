import {
  IsString,
  IsEmail,
  Length,
  Matches,
  IsEnum,
  IsOptional,
  ValidateIf,
  IsBoolean,
} from 'class-validator';

export enum Country {
  US = 'US',
  VN = 'VN',
  UK = 'UK',
  CA = 'CA',
}

export enum PaymentMethod {
  CREDIT_CARD = 'credit_card',
  PAYPAL = 'paypal',
  COD = 'cod',
}

export class CheckoutDto {
  @IsString()
  @Length(2, 50)
  fullName: string;

  @IsEmail()
  email: string;

  @Matches(/^\+?\d{9,15}$/)
  phoneNumber: string;

  @IsString()
  @Length(10)
  shippingAddress: string;

  @IsString()
  city: string;

  @IsString()
  @Length(4, 10)
  postalCode: string;

  @IsEnum(Country)
  country: Country;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsBoolean()
  termsAccepted: boolean;

  @ValidateIf((o) => o.paymentMethod === PaymentMethod.CREDIT_CARD)
  @IsString()
  @Matches(/^\d{16}$/)
  cardNumber?: string;

  @ValidateIf((o) => o.paymentMethod === PaymentMethod.CREDIT_CARD)
  @IsString()
  @Matches(/^\d{2}\/\d{2}$/)
  expiryDate?: string;

  @ValidateIf((o) => o.paymentMethod === PaymentMethod.CREDIT_CARD)
  @IsString()
  @Matches(/^\d{3,4}$/)
  cvv?: string;
}
