class Port {
  constructor (portName) {
    this.name = portName;
    this.ships = [];
  }

  addShip (ship) {
    this.ships.unshift(ship);
  }

  removeShip (ship) {
    this.ships.shift(ship);
  }

}
  
module.exports = Port;