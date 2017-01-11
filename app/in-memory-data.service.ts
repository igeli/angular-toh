import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
  { id: 1, name: 'Narcoman' },
  { id: 2, name: 'Sapuco' },
  { id: 3, name: 'Peron!' },
  { id: 4, name: 'Magneto' },
  { id: 5, name: 'Wolverine' },
  { id: 6, name: 'El hombre goma' },
  { id: 7, name: 'La goma hombre' },
  { id: 8, name: 'Dr Sapapa' },
  { id: 9, name: 'Manganeta' },
  { id: 10, name: 'PipetaMan' }
    ];
    return {heroes};
  }
}
