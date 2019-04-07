/*
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

world.listCities_[0].soulForTheArmy(50000);

guerre.battle(
  world.listCities_[0].getArmy(),
  world.listCities_[0].getArmy(),
  world.listCities_[0].getScience(),
  world.listCities_[0].getScience()
);
world.listCities_[0].armyStatus();

setInterval(() => world.buildingWonders(2000), 4000);
setInterval(() => world.citiesGettingEverything(), 4000);
setInterval(() => world.showWorld(), 4000);
// world.buildingWonders(5000);
// world.showWorld();

world.listCities_[0].soulForTheArmy(4000);
setInterval(()=> world.listCities_[0].armyStatus(),2000);
//setInterval(() => world.listCities_[0].buryTheDead(),10000);
//setInterval(() => world.listCities_[0].scienceInvest(world.listCities_[0].getGold() * 0.1), 1000);
*/

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


const bBottom = new City('Bikini bottom', "bob l'éponge");
const bB = new City('Bikini battom', "bobl'éponge");
const guerre = new War();
setInterval(()=> bBottom.armyStatus(),2000);

setInterval(() => world.buildingWonders(2000), 4000);
setInterval(() => world.citiesGettingEverything(), 4000);
setInterval(() => world.showWorld(), 4000);

world.listCities_[0].armyStatus();
guerre.battle(
    world.listCities_[0].getArmy(),
    world.listCities_[1].getArmy(),
    world.listCities_[0].getScience(),
    world.listCities_[1].getScience()
);
// BBottom.armyStatus();
setInterval(() => world.listCities_[0].scienceInvest(world.listCities_[0].getGold() * 0.1), 1000);
// BBottom.giveShit();
world.listCities_[0].soulForTheArmy(50000);
world.listCities_[0].soulForTheArmy(4000);
setInterval(() => world.listCities_[0].buryTheDead(),10000);

// setInterval(() => bBottom.scienceInvest(bBottom.getGold() * 0.1), 1000);
// setInterval(() => bBottom.giveShit(), 2000);
// // BBottom.giveShit();
// setInterval(() => bBottom.showShit(), 1000);

// SetInterval(() => bBottom.getShit(bBottom),1000);



