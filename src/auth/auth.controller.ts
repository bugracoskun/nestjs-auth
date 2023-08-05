import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { Public } from './auth.public';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService, private usersService: UsersService) { }

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('signin')
  signIn(@Body() signInDto: UserLoginDto) {
    return this.authService.signIn(signInDto);
  }

  @Post('signup')
  async signUp(@Body() registerUserDto: UserLoginDto) {
    return this.usersService.create(registerUserDto);
  }
}
