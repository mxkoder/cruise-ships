class Ship {
  constructor (port) {
    this.currentPort = port;
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

