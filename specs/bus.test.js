const Bus = require('../bus');
const Person = require('../person');
const BusStop = require('../bus_stop');

describe ('bus', () => {

  let bus;
  let person1;
  let person2;
  let busStop;

  beforeEach(() => {
    bus = new Bus(22, 0, 'Ocean Terminal')
    person1 = new Person('Dan', 25);
    person2 = new Person('Tanya', 47);
    busStop = new BusStop;
    busStop.queue = [person1, person2];
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
    expect(bus.distance).toBe(10);
  });

  test('bus should have passengers', () => {
    expect(bus.passengers).toEqual([]);
  });

  test('bus should be able to count passengers', () => {
    expect(bus.countPassengers()).toBe(0);
    bus.addPassenger(person1);
    expect(bus.countPassengers()).toBe(1);
  });

  test('bus should be able to add a passenger', () => {
    bus.addPassenger(person1);
    expect(bus.passengers.length).toBe(1);
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

  test('bus should be able to pick up all passengers from stop', () => {
    bus.pickUpAll(busStop);
    expect(bus.passengers.length).toBe(2);
    expect(busStop.queue.length).toBe(0);
  });

});
