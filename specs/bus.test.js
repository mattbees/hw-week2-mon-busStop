const Bus = require('../bus');
const Person = require('../person');

describe ('bus', () => {

  let bus;
  let person1;
  let person2;

  beforeEach(() => {
    bus = new Bus(22, 0, 'Ocean Terminal')
    person1 = new Person('Dan', 25);
    person2 = new Person('Tanya', 47);
  });

  test('bus should have a route number', () => {
    expect(bus.routeNo).toBe(22);
  });

  test('bus should have a distance', () => {
    expect(bus.distance).toBe(0);
  });

  test('bus should have a destination', () => {
    expect(bus.destination).toBe('Ocean Terminal');
  });

  test('bus should be able to cover distance', () => {
    bus.drive();
    expect(bus.distance)/*>arg*/;
  });

  test('bus should have passengers', () => {
    expect(bus.passengers === []);
  });

  test('bus should be able to count passengers', () => {
    expect(bus.countPassengers() === 0);
  });

  test('bus should be able to add a passenger', () => {
    bus.addPassenger(person1);
    expect(bus.passengers.length) === 1;
  });

  test('bus should be able to drop off a passenger', () => {
    bus.addPassenger(person1);
    bus.addPassenger(person2);
    bus.dropPassenger();
    expect(bus.passengers.length).toBe(1);
  });

  test('bus should be able to drop all passengers', () => {
    bus.addPassenger(person1);
    bus.addPassenger(person2);
    bus.empty();
    expect(bus.passengers.length).toBe(0);
  });

});
