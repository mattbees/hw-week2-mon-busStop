const BusStop = function (name) {
  this.name = name;
  this.queue = [];
};

BusStop.prototype.addToQueue = function (person) {
  this.queue.push(person);
};

module.exports = BusStop;
