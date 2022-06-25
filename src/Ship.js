class Ship {
  constructor (currentPort) {
    this.currentPort = currentPort;
  }

  setSail () {
    this.currentPort = 0;
  }
}

class Port {
  constructor (portName) {
    this.name = portName;
  }
}

module.exports = Ship;



/*
function Ship (currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype.setSail = function () {
  this.currentPort = 0;
}
*/

