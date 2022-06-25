const Ship = require('../src/Ship');
const Port = require('../src/Port');
const Itinerary = require('../src/Itinerary');

describe('Port', () => {
    it('can be instantiated', () => {
        expect(new Port()).toBeInstanceOf(Object);
    });

    it('has a name property', () => {
        const port = new Port('Calais');

        expect(port.name).toBe('Calais');
    });

    it('has ships property', () => {
        const port = new Port('Calais');
    
        expect(port.ships).toBeTruthy();
    });
});

describe('addShip', () => {
    it('adds a ship to the ships property of the port', () => {
        const port = new Port('Venice');
        const ship = {};

        port.addShip(ship);

        expect(port.ships).toContain(ship);
    });
});

describe('removeShip', () => {
    it('removes a ship from the ships property of the port', () => {
        const port = new Port('Venice');
        const nymphidia = {};
        const leakyDuck = {};

        port.addShip(nymphidia);
        port.addShip(leakyDuck);
        port.removeShip(nymphidia);

        expect(port.ships).toEqual([leakyDuck]);
    });
});