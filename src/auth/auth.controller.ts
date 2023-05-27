import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from 'tools/dtos/user.dto';
import { Public } from './auth.public';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: UserLoginDto) {
    return this.authService.login(signInDto.username, signInDto.password);
  }
}
