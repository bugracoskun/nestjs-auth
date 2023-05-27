import { Injectable } from '@nestjs/common';
import { UserModel } from 'tools/models/user.model';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'bugra',
      password: 'bugra123',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<UserModel | undefined> {
    return this.users.find((user) => user.username === username);
  }

  getUserById(userId: number): UserModel {
    return this.users.find((user) => user.userId === userId);
  }
}
