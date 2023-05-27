import { Param, Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from 'tools/models/user.model';
import { UserNotFoundException } from 'tools/exceptions/user.exception';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get(':id')
  getProfile(@Param() params): UserModel {
    const user = this.usersService.getUserById(Number(params.id));
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }
}
