import { Param, Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserModel } from 'tools/models/user.model';
import { UserNotFoundException } from 'tools/exceptions/user.exception';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get(':id')
  async getProfile(@Param() params): Promise<UserModel> {
    const user = await this.usersService.findOne(params.id);
    if (!user) {
      throw new UserNotFoundException();
    }
    return user;
  }
}
