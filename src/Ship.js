function Ship (currentPort) {
  this.currentPort = currentPort;
}

Ship.prototype.setSail = function () {
  this.currentPort = 0;
}


module.exports = Ship;