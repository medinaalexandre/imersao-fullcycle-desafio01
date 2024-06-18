import { Test, TestingModule } from '@nestjs/testing';
import { SpotsController } from './spots.controller';
import { SpotsService } from './spots.service';
import { PrismaService } from '../prisma/prisma.service';

describe('SpotsController', () => {
  let controller: SpotsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotsController],
      providers: [SpotsService, PrismaService],
    }).compile();

    controller = module.get<SpotsController>(SpotsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
