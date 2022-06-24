const Ship = require('../src/Ship');

describe('ship', () => {
    it('can be instantiated', () => {
      expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a current port property', () => {
      const ship = new Ship('Venice');

      expect(ship.currentPort).toBe('Venice');
    });
  });

  describe('setSail', () => {
    it('changes the currentPort property of Ship to 0 when applied', () => {
      const ship = new Ship('Venice');
      ship.setSail();
      
      expect(ship.currentPort).toBeFalsy();
    });
  });

