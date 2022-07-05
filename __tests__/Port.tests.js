const Port = require('../src/Port');

describe('Port', () => {

    let port

    beforeEach(() => {
        port = new Port('Valencia');
    });

    describe('Port constructor function', () => {
        it('can be instantiated', () => {
            expect(new Port()).toBeInstanceOf(Object);
        });

        it('has a name property', () => {
            expect(port.name).toBe('Valencia');
        });

        it('has ships property', () => {
            expect(port.ships).toBeTruthy();
        });
    });

    describe('addShip', () => {
        it('adds a ship to the ships property of the port', () => {
            const ship = jest.fn();

            port.addShip(ship);

            expect(port.ships).toContain(ship);
        });
    });

    describe('removeShip', () => {
        it('removes a ship from the ships property of the port', () => {
            const nymphidia = jest.fn(); 
            const leakyDuck = jest.fn(); 

            port.ships = [nymphidia, leakyDuck];
            expect(port.ships.length).toBe(2);

            port.removeShip(nymphidia);

            expect(port.ships.length).toBe(1);
        });
    });
});
