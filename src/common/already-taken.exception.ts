import { HttpException, HttpStatus } from '@nestjs/common';

export class AlreadyTakenException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.BAD_REQUEST,
        error: 'Spot not available',
        message,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
