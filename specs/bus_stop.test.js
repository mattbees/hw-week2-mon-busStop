const BusStop = require('../bus_stop');
const Person = require('../person');

describe ('bus stop', () => {

  let busStop;
  let person3;

  beforeEach(() => {
    busStop = new BusStop('Leith Walk');
    person3 = new Person('Jonas', 35);
  });

  test('bus stop should have a name', () => {
    expect(busStop.name).toBe('Leith Walk');
  });

  test('bus stop should have a queue', () => {
    expect(busStop.queue) === [];
  });

  test('bus stop should be able to add people to the queue', () => {
    busStop.addToQueue(person3);
    expect(busStop.queue) === 1;
  });

});
