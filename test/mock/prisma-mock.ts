export const dummyEvent = {
  id: 'edc7176d-9045-40d4-a804-9229b6c17e9b',
  name: 'foo',
  description: 'bar',
  date: new Date().toISOString(),
  price: 100.5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const dummyEvent2 = {
  id: 'edc7176d-9045-40d4-a804-9229b6c17e9c',
  name: 'foo2',
  description: 'bar2',
  date: new Date().toISOString(),
  price: 150.5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export const prismaMock = {
  event: {
    create: jest.fn().mockResolvedValue(dummyEvent),
    findMany: jest.fn().mockResolvedValue([dummyEvent, dummyEvent2]),
    findUnique: jest.fn().mockResolvedValue(dummyEvent),
    update: jest.fn().mockResolvedValue(dummyEvent),
    delete: jest.fn().mockResolvedValue(true),
  },
};
