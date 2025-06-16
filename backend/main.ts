import { NestFactory } from '@nestjs/core';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { AppModule } from 'src/app.module';
import { GlobalHttpExceptionFilter } from 'src/common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (validationErrors = []) => {
        const errors: Record<string, string[]> = {};
        validationErrors.forEach((err) => {
          if (err.constraints) {
            errors[err.property] = Object.values(err.constraints);
          }
        });
        return new BadRequestException({
          message: 'Validation failed',
          statusCode: 400,
          errors,
        });
      },
    }),
  );
  app.useGlobalFilters(new GlobalHttpExceptionFilter());
  app.enableCors(); // Enable CORS for frontend
  await app.listen(3000);
}
bootstrap();
