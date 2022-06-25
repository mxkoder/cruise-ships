const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');


describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a port property with an array of ports', () => {
        const dover = new Port('Dover');
        const calais = new Port ('Calais')
        const itinerary = new Itinerary ([dover, calais]);

        expect(itinerary.ports).toEqual([dover, calais]);
    });
});


