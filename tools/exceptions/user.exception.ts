import { HttpException, HttpStatus } from '@nestjs/common';

export class UserNotFoundException extends HttpException {
  constructor() {
    super('user does not exist', HttpStatus.NOT_FOUND);
  }
}
