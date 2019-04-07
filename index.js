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
const guerre = new War();

world.listCities_[0].soulForTheArmy(50000);

guerre.battle(
    world.listCities_[0].getArmy(),
    world.listCities_[0].getArmy(),
    world.listCities_[0].getScience(),
    world.listCities_[0].getScience()
);
world.listCities_[0].armyStatus();

setInterval(() => world.buildingWonders(1000), 3000);
world.listCities_[0].gold_ += 1000;
setInterval(() => world.showWorld(), 3000);
// world.buildingWonders(5000);
// world.showWorld();

world.listCities_[0].soulForTheArmy(4000);
setInterval(()=> world.listCities_[0].armyStatus(),2000);
setInterval(() => world.listCities_[0].buryTheDead(),10000);

setInterval(() => world.listCities_[0].scienceInvest(world.listCities_[0].getGold() * 0.1), 1000);
setInterval(() => world.listCities_[0].giveShit(), 2000);
world.listCities_[0].giveShit();
setInterval(() => world.listCities_[0].showShit(), 1000);
// >>>>>>> 31c3ff8ed894010eb026eed3a5816ce45c14ae74

setInterval(() => world.listCities_[0].getShit(world.listCities_[0]),1000);
