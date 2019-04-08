const Bus = require('../bus');
const Person = require('../person');

describe ('person', () => {

  let person;

  beforeEach(() => {
    person = new Person('Franky', 72)
  });

  test('person should have a name', () => {
    expect(person.name).toBe('Franky');
  });

  test('person should have an age', () => {
    expect(person.age).toBe(72);
  });
});
