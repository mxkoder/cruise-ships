const Port = require('../src/Port');

describe('Port', () => {
    it('can be instantiated', () => {
      expect(new Port()).toBeInstanceOf(Object);
    });
  
    it('has a name property', () => {
      const port = new Port('Calais');
  
      expect(port.name).toBe('Calais');
    });
  });