const Person = require('./person');

const Bus = function (routeNo, distance, destination) {
  this.routeNo = routeNo;
  this.distance = distance;
  this.destination = destination;
  this.passengers = [];
};

Bus.prototype.drive = function () {
  this.distance+10;
};

Bus.prototype.countPassengers = function () {
  return this.passengers.length;
}

Bus.prototype.addPassenger = function (person) {
  this.passengers.push(person);
}

Bus.prototype.dropPassenger = function () {
  this.passengers.pop();
};

Bus.prototype.empty = function () {
  this.passengers = [];
};

module.exports = Bus;
