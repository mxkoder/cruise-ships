# Cruise Ship OOP project

## About
I created this project as part of the [Manchester Codes](https://www.manchestercodes.com/) software engineering course. The objective was to learn about Object Oriented Programming (OOP) principles using JavaScript, and to practise Test Driven Development. 

The project contains three objects that interact with each other, allowing a 'ship' to travel across an itinerary with predetermined ports. 

## Setup
The project uses JavaScript, Node and Jest. 

Download and initial setup: 
* Fork the project repository
* Get the project link, navigate to the local folder where the project should be installed, and run ``git clone`` 
* Switch to the newly installed project folder and run ``npm install``
* If the test suite is also needed Jest will need to be installed, e.g. by running ``npm install -D jest``

## Running the project
The Cruise Ships project does not currently have a GUI and can be run locally using the node REPL. 

### Setting up the node REPL
1. In the terminal, run ``node``
2. Staying in the node REPL, run the following line by line to import the ship, port, and itinerary objects:
	*  ``const Itinerary = require('./src/Itinerary');``
	* ``const Port = require('./src/Port');``
	* ``const Ship = require('./src/Ship');``
3. Still in the node REPL, instatiate the shop, itinerary, and ports of your choice by running:
	* ``const palma = new Port('Palma');`` (repeat with other port names)
	* ``const itinerary = new Itinerary([valencia, palma, barcelona]);``
	* ``const ship = new Ship(itinerary);``
The ship should now be setup, stay in the node REPL for the next part. The setup should look like this: 
![node REPL cruise ship setup](/images/node-REPL-cruise-ship-setup.png)


### Navigating the ship along the itinerary in the node REPL
The ship object has methods to navigate along the itinerary. 

1. Run ``ship.currentPort.name;``  - the readout should be the first port in the itinerary ('Valencia' in the example)
2. Run ``ship.setSail();``
3. Run ``ship.dock();``
4. Run ``ship.currentPort.name;`` - the readout should be the next port in the itinerary. 
5. To see the previous port, run ``ship.previousPort.name``
Example commands to navigate the ship:

![node REPL cruise ship navigation](/images/node-REPL-cruise-ship-use.png)

## Next steps
The main objective of this project was to learn about basic principles of OOP and TDD. If I was to develop this project further I would:
* Add a GUI to make user interaction easier, a better option than the node REPL for non technical users!
* Add functionality to add or remove ports from the itinerary, or to include distances and distance calculations
* The codebase could be re-purposed for other uses, for example planning a biketour or a similar journey. 


## Author

Agnes Beviz

[website](https://agnesbeviz.co.uk/) ｜ [twitter](https://twitter.com/mx_coder_) ｜ [linkedin](https://www.linkedin.com/in/agnes-beviz/)