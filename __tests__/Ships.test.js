const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Ship', () => {

  let ship;
  let valencia;
  let palma;
  let itinerary

  beforeEach(() => {
    valencia = new Port('Valencia');
    palma = new Port('Palma');
    itinerary = new Itinerary([valencia, palma]);
    ship = new Ship(itinerary);
  });

  describe('Ship constructor function', () => {

    it('can be instantiated', () => {
      expect(ship).toBeInstanceOf(Object);
    });

    it('has a current port property', () => {
      expect(ship.currentPort).toBe(valencia);
    });

    it('has a previous port property initialised to null', () => {
      expect(ship.previousPort).toBe(null);
    });

    it('adds the ship to the current port\'s ships property on instantiation', () => {
      expect(valencia.ships).toContain(ship);
    });
  });


  describe('it can set sail and dock', () => {

    beforeEach(() => {
      ship.setSail();
    });

    describe('setSail', () => {

      it('changes the currentPort property of Ship to null when applied', () => {
        expect(ship.currentPort).toBeFalsy();
      });

      it('sets the previousPort property on the ship to the current port', () => {
        expect(ship.previousPort).toBe(valencia);
      });

      it('removes the ship from the ships property of the port it set sail from', () => {
        expect(valencia.ships).not.toContain(ship);
      });

      it('can\'t sail further than the last port in it\'s itiniary', () => {
        ship.dock();
        
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
    });
  

    describe('dock', () => {
      
      it('can dock at a different port - changes the value of the currentPort property of the ship to port object the ship has docked at', () => {

        ship.dock();
          
        expect(ship.currentPort).toBe(palma);
        expect(palma.ships).toContain(ship);
      });
    });
  });
});