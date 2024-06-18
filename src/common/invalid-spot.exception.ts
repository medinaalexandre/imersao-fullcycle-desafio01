import { HttpException, HttpStatus } from '@nestjs/common';

export class InvalidSpotException extends HttpException {
  constructor(message: string) {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Spot not found',
        message,
      },
      HttpStatus.NOT_FOUND,
    );
  }
}
