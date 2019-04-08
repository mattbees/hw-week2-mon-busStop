const BusStop = require('../bus_stop');
const Bus = require('../bus');
const Person = require('../person');

describe ('bus stop', () => {

  let busStop;

  beforeEach(() => {
    busStop = new BusStop('Leith Walk')
  });

  test('bus stop should have a name', () => {
    expect(busStop.name).toBe('Leith Walk');
  });

  test('bus stop should have a queue', () => {
    expect(busStop.queue) === [];
  })

});
