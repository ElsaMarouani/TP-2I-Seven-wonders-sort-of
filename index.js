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
// SetInterval(()=> world.listCities_[0].armyStatus(),2000);

guerre.battle(
  world.listCities_[0].getArmy(),
  world.listCities_[1].getArmy(),
  world.listCities_[0].getScience(),
  world.listCities_[1].getScience()
);

setInterval(() => world.showWorld(), 4000);

// Declare une fonction asychrone de type Trade
const main = async (city1, gold1) => {
  const t = new Trade();
  await t.asyncCallGold(city1, gold1);
};

// L'appel de la fonction asynchrone
setInterval(
  () => main(world.listCities_[0], world.listCities_[0].getGold()),
  4000
);
