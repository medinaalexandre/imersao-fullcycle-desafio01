import { HttpException, HttpStatus } from '@nestjs/common';

export class DatabaseTransactionException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Database Transaction Error',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
