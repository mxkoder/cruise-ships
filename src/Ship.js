class Ship {
  constructor (startingPort) {
    this.currentPort = startingPort;
  }

  setSail () {
    this.currentPort = 0;
  }

  dock (dockingPort) {
    this.currentPort = dockingPort;
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

