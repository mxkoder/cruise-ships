const Itinerary = require('../src/Itinerary');

describe('Itinerary', () => {
    it('can be instantiated', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });

    it('has a port property with an array of ports', () => {
        const valencia = {};
        const palma = {};
        const itinerary = new Itinerary ([valencia, palma]);

        expect(itinerary.ports).toEqual([valencia, palma]);
    });
});


