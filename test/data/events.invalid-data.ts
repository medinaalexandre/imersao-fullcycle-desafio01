import { dummyEvent } from '../mock/prisma-mock';

/**
 * description, invalidData, expectedErrorMessage
 */
export const eventInvalidData = [
  [
    'missing name',
    { ...dummyEvent, name: undefined },
    'name should not be empty',
  ],
  [
    'too long name',
    { ...dummyEvent, name: 'a'.repeat(256) },
    'name must be shorter than or equal to 255 characters',
  ],
  [
    'missing description',
    { ...dummyEvent, description: undefined },
    'description should not be empty',
  ],
  [
    'too long description',
    { ...dummyEvent, description: 'a'.repeat(256) },
    'description must be shorter than or equal to 255 characters',
  ],
  [
    'invalid date',
    { ...dummyEvent, date: 'invalid-date' },
    'date must be a valid ISO 8601 date string',
  ],
  [
    'invalid price',
    { ...dummyEvent, price: 'R$ 99,99' },
    'price must be a number conforming to the specified constraints',
  ],
];
