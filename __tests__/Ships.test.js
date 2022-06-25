const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });

  it('has a current port property', () => {
    const venicePort = new Port('Venice');
    const ship = new Ship(venicePort);

    expect(ship.currentPort).toBe(venicePort);
  });

  it('has a previous port property initialised to null', () => {
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

/*
Refactor the Ship test suite so a Ship takes an Itinerary object instead of a Port object. 
The Itinerary object will have 2 Port objects stored in an array on its ports property.

Refactor the -it can dock at a different port- test so that no argument is passed to ship.dock, 
and asserts the currentPort to be the next port in the Itinerary instance. The tests will break. */
