import { Injectable } from '@nestjs/common';
import { UserLoginDto } from 'tools/dtos/user.dto';
import * as bcrypt from 'bcrypt';
import { UserEntity } from './entity/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) { }

  async findOne(id: number): Promise<UserEntity | undefined> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByUsername(username: string): Promise<UserEntity> {
    return this.userRepository.findOne({ where: { username } });
  }

  async create(registerUserDto: UserLoginDto): Promise<UserEntity> {
    const { username, password } = registerUserDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new UserEntity();
    user.username = username;
    user.password = hashedPassword;

    return this.userRepository.save(user);
  }
}
