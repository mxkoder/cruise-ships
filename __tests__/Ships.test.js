const Ship = require('../src/Ship');
const Port = require('../src/Port');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a current port property', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);

    expect(ship.currentPort).toBe(venicePort);
  });
});

describe('setSail', () => {
  it('changes the currentPort property of Ship to 0 when applied', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);
    ship.setSail();
      
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('dock', () => {
  it('changes the value of the currentPort property of the ship to port object the ship has docked at', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port('Split');
    const ship = new Ship(venicePort);
    ship.dock(splitPort);
      
    expect(ship.currentPort).toBe(splitPort);
  });
});


