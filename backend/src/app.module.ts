import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CheckoutModule } from './checkout/checkout.module';

@Module({
  imports: [UsersModule, CheckoutModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
