import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: faker.address.latitude() * 1,
      lng: faker.address.longitude() * 1
    };
  }

  markerContent(): string {
    return `User Name: ${this.name}`;
  }
}