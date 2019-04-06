const {City} = require('./app/city');
const {War} = require('./app/war');

const bBottom = new City('Bikini bottom', "bob l'éponge");
const bB = new City('Bikini battom', "bobl'éponge");
bBottom.soulForTheArmy(50000);
const guerre = new War();
guerre.battle(
  bBottom.getArmy(),
  bB.getArmy(),
  bBottom.getScience(),
  bB.getScience()
);
bBottom.armyStatus();
// BBottom.soulForTheArmy(4000);
// setInterval(()=> bBottom.armyStatus(),2000);
// setInterval(() => bBottom.buryTheDead(),10000);

// setInterval(() => bBottom.scienceInvest(bBottom.getGold() * 0.1), 1000);
// setInterval(() => bBottom.giveShit(), 2000);
// // BBottom.giveShit();
// setInterval(() => bBottom.showShit(), 1000);

// SetInterval(() => bBottom.getShit(bBottom),1000);
