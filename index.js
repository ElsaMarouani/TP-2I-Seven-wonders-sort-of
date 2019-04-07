const {City} = require('./app/city');
const {War} = require('./app/war');
const {World} = require('./app/world');

const world = new World();
world.addCity('Gizeh', 'Ptah');
world.addCity('Babylone', 'Ahriman');
world.addCity('Olympie', 'Zeus');
world.addCity('Bodrum', 'Tengri');
world.addCity('Ephèse', 'Artemis');
world.addCity('Rhodes', 'Hélios');
world.addCity('Alexandria', 'Osiris');

//const bBottom = new City('Bikini bottom', "bob l'éponge");
//const bB = new City('Bikini battom', "bobl'éponge");
world.listCities_[0].soulForTheArmy(50000);
const guerre = new War();
guerre.battle(
    world.listCities_[0].getArmy(),
    world.listCities_[0].getArmy(),
    world.listCities_[0].getScience(),
    world.listCities_[0].getScience()
);
world.listCities_[0].armyStatus();

// SetInterval(() => world.buildingWonders(1000), 3000);
// setInterval(() => world.showWorld(), 3000);

// world.buildingWonders(5000);
//world.showWorld();

// BBottom.soulForTheArmy(4000);
// setInterval(()=> bBottom.armyStatus(),2000);
// setInterval(() => bBottom.buryTheDead(),10000);

// setInterval(() => bBottom.scienceInvest(bBottom.getGold() * 0.1), 1000);
// setInterval(() => bBottom.giveShit(), 2000);
// // BBottom.giveShit();
// setInterval(() => bBottom.showShit(), 1000);

// SetInterval(() => bBottom.getShit(bBottom),1000);
