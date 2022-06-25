const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Dover');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });

  it('has a current port property', () => {
    const venicePort = new Port('Venice');
    const itinerary = new Itinerary ([venicePort]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(venicePort);
  });

  it('has a previous port property initialised to null', () => {
    const venicePort = new Port('Venice');
    const itinerary = new Itinerary ([venicePort]);
    const ship = new Ship(itinerary);

    expect(ship.previousPort).toBe(null);
  });
});

describe('setSail', () => {
  it('changes the currentPort property of Ship to null when applied', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port ('Split');
    const itinerary = new Itinerary ([venicePort, splitPort]);
    const ship = new Ship(itinerary);
    ship.setSail();
      
    expect(ship.currentPort).toBeFalsy();
  });

  it('sets the previousPort property on the ship to the curent port', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port ('Split');
    const itinerary = new Itinerary ([venicePort, splitPort]);
    const ship = new Ship(itinerary);
    ship.setSail();
    
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(venicePort);
  });

  it('can\'t sail further than the last port in it\'s itiniary', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port('Split');
    const itinerary = new Itinerary ([venicePort, splitPort]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
    
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

});

describe('dock', () => {
  it('can dock at a different port - changes the value of the currentPort property of the ship to port object the ship has docked at', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port('Split');
    const itinerary = new Itinerary ([venicePort, splitPort])
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
      
    expect(ship.currentPort).toBe(splitPort);
  });
});

