const {City} = require('./app/city');
const {War} = require('./app/war');
const {World} = require('./app/world');

const world = new World();
world.addCity('Giza', 'Ptah');
world.addCity('Babylon', 'Ahriman');
world.addCity('Olympia', 'Zeus');
world.addCity('Halicarnassus', 'Tengri');
world.addCity('Ephesus', 'Artemis');
world.addCity('Rhodes', 'Hélios');
world.addCity('Alexandria', 'Osiris');
const guerre = new War();
//setInterval(()=> world.listCities_[0].armyStatus(),2000);

guerre.battle(world.listCities_[0].getArmy(), world.listCities_[1].getArmy(), world.listCities_[0].getScience(), world.listCities_[1].getScience());

setInterval(() => world.showWorld(), 4000);





