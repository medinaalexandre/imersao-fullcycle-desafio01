import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../src/auth/auth.module';
import { EventsModule } from '../src/events/events.module';
import { PrismaModule } from '../src/prisma/prisma.module';
import { PrismaService } from '../src/prisma/prisma.service';
import { prismaMock } from './mock/prisma-mock';
import { eventInvalidData } from './data/events.invalid-data';

describe('EventsController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        AuthModule,
        EventsModule,
        PrismaModule,
      ],
    })
      .overrideProvider(PrismaService)
      .useValue(prismaMock)
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );
    await app.init();
  });

  it('should create an event with valid data', async () => {
    const validEventData = {
      name: 'Test Event',
      description: 'This is a test event',
      date: '2024-12-31T23:59:59.999Z',
      price: 100,
    };

    const response = await request(app.getHttpServer())
      .post('/events')
      .send(validEventData)
      .expect(201);

    expect(response.body).toEqual(
      expect.objectContaining(prismaMock.event.create()),
    );
  });

  describe('Validation Tests', () => {
    test.each(eventInvalidData)(
      'should not create an event with invalid data (%s)',
      async (
        description: string,
        invalidData: any,
        expectedErrorMessage: any,
      ) => {
        const response = await request(app.getHttpServer())
          .post('/events')
          .send(invalidData)
          .expect(400);

        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toEqual(
          expect.arrayContaining([expectedErrorMessage]),
        );
      },
    );
  });

  afterAll(async () => {
    await app.close();
  });
});
