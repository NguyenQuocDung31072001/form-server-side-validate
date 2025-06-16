import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  async create(createUserDto: CreateUserDto) {
    // In a real application, you would save this to a database
    // For this MVP, we'll just return the validated data
    return {
      message: 'User registered successfully',
      user: {
        username: createUserDto.username,
        email: createUserDto.email,
      },
    };
  }
}
