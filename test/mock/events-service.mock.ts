import { CreateEventDto } from '../../src/events/dto/create-event.dto';
import { UpdateEventDto } from '../../src/events/dto/update-event.dto';
import { ReserveSpotDto } from '../../src/events/dto/reserve-spot.dto';

export const dummyEvent = {
  id: 'edc7176d-9045-40d4-a804-9229b6c17e9b',
  name: 'foo',
  description: 'bar',
  date: new Date().toISOString(),
  price: 100.5,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

export class EventsServiceMock {
  create(createEventDto: CreateEventDto) {
    return 'created';
  }

  findAll() {
    return [];
  }

  findOne(id: string) {}

  update(id: string, updateEventDto: UpdateEventDto) {
    return updateEventDto;
  }

  remove(id: string) {
    return true;
  }

  async reserveSpot(dto: ReserveSpotDto & { eventId: string }) {
    return true;
  }
}
