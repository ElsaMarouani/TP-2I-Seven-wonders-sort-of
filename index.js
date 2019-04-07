const {War} = require('./app/war');
const {World} = require('./app/world');
const {Trade} = require('./app/trade');

const world = new World();
world.addCity('Giza', 'Ptah');
world.addCity('Babylon', 'Ahriman');
world.addCity('Olympia', 'Zeus');
world.addCity('Halicarnassus', 'Tengri');
world.addCity('Ephesus', 'Artemis');
world.addCity('Rhodes', 'Hélios');
world.addCity('Alexandria', 'Osiris');
const guerre = new War();

//declare une fonction asychrone de type Trade
const mainGold = async (city,gold) => {
const t = new Trade();
await t.asyncCallGold(city,gold);
}

const mainCorn = async (city,corn) => {
    const t = new Trade();
    await t.asyncCallCorn(city,corn);
}

//l'appel de la fonction asynchrone
setInterval(()=>mainGold(world.listCities_[0],world.listCities_[0].getGold()),4000);
setInterval(()=>mainCorn(world.listCities_[0],world.listCities_[0].getCorn()),4000);

// world.listCities_[0].soulForTheArmy(50000);
//
// guerre.battle(
//   world.listCities_[0].getArmy(),
//   world.listCities_[0].getArmy(),
//   world.listCities_[0].getScience(),
//   world.listCities_[0].getScience()
// );
// world.listCities_[0].armyStatus();
//
// setInterval(() => world.buildingWonders(2000), 4000);
// setInterval(() => world.citiesGettingEverything(), 4000);
// setInterval(() => world.showWorld(), 4000);
// world.buildingWonders(5000);
// world.showWorld();

// world.listCities_[0].soulForTheArmy(4000);
// setInterval(()=> world.listCities_[0].armyStatus(),2000);
//setInterval(() => world.listCities_[0].buryTheDead(),10000);
// setInterval(() => world.listCities_[0].scienceInvest(world.listCities_[0].getGold() * 0.1), 1000);
//setInterval(() => world.listCities_[0].showShit(), 1000);
//setInterval(() => world.listCities_[0].getShit(world.listCities_[0]),1000);
