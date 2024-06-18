import { Module } from '@nestjs/common';
import { SpotsController } from './spots.controller';
import { SpotsService } from './spots.service';

@Module({
  providers: [SpotsService],
  controllers: [SpotsController],
})
export class SpotsModule {}
