class Ship {
  constructor (itinerary) {
    this.itinerary = itinerary;
    this.currentPort = itinerary.ports[0];
    this.previousPort = null;
 
  }

  setSail () {
    const itinerary = this.itinerary;
    const currentPortIndex = this.itinerary.ports.indexOf(this.currentPort);

    if (currentPortIndex === (itinerary.ports.length - 1)) {
      throw new Error ("End of itinerary reached");
    }
    
    this.previousPort = this.currentPort;
    this.currentPort = null;
  }

  dock () {
    const itinerary = this.itinerary;
    const previousPortIndex = this.itinerary.ports.indexOf(this.previousPort);
    this.currentPort = this.itinerary.ports[previousPortIndex + 1];
  }
}



module.exports = Ship;







/*
function Ship (currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype.setSail = function () {
  this.currentPort = 0;
}
*/

