const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');


describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a port property', () => {
        const port1 = new Port('Dover');
        const itinerary = new Itinerary (port1);

        expect(itinerary.ports).toBeTruthy();
    });
});