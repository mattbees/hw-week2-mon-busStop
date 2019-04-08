const Bus = require('../bus');
const Person = require('../person');

describe ('person', () => {

  let person;

  beforeEach(() => {
    person = new Person(/*args*/)
  });

  // test('bus should have a route number', () => {
  //   expect(bus.routeNo).toBe(/*arg*/);
  // });

  xtest('person should have a name', () => {
    expect(person.name).toBe(/*arg*/);
  });

  xtest('person should have an age', () => {
    expect(person.age).toBe(/*arg*/);
  });
});
