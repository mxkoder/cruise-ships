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

  it('has a perious port property initialised to null', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);

    expect(ship.previousPort).toBe(null);
  });
});

describe('setSail', () => {
  it('changes the currentPort property of Ship to 0 when applied', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);
    ship.setSail();
      
    expect(ship.currentPort).toBeFalsy();
  });

  it('sets the previousPort property on the ship to the curent port', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);
    ship.setSail();
      
    expect(ship.previousPort).toBe(venicePort);

  });
});

describe('dock', () => {
  it('can dock at a different port - changes the value of the currentPort property of the ship to port object the ship has docked at', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port('Split');
    const ship = new Ship(venicePort);
    ship.dock(splitPort);
      
    expect(ship.currentPort).toBe(splitPort);
  });
});


