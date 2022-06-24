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



/*
    it('sets the name property - returns an object with the name property passed in as an argument', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });

    it('has an age property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });

    it('has a hunger property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });

    it('has a fitness property with an initial value of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });

  */