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

  it('adds the ship to the current port\'s ships property on instantiation', () => {
    const venice = new Port('Venice');
    const itinerary = new Itinerary ([venice]);
    const ship = new Ship(itinerary);

    expect(venice.ships).toContain(ship);
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

  it('sets the previousPort property on the ship to the current port', () => {
    const venicePort = new Port('Venice');
    const splitPort = new Port ('Split');
    const itinerary = new Itinerary ([venicePort, splitPort]);
    const ship = new Ship(itinerary);
    ship.setSail();

    expect(ship.previousPort).toBe(venicePort);
  });

  it('removes the ship from the ships property of the port it set sail from', () => {
    const venice = new Port('Venice');
    const split = new Port ('Split');
    const itinerary = new Itinerary ([venice, split]);
    const ship = new Ship(itinerary);
    ship.setSail();

    expect(venice.ships).not.toContain(ship);
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
    const venice = new Port('Venice');
    const split = new Port('Split');
    const itinerary = new Itinerary ([venice, split])
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();
      
    expect(ship.currentPort).toBe(split);
    expect(split.ships).toContain(ship);
  });
});

