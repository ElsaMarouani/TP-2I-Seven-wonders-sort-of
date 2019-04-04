const {City} = require('./app/city');
const {War} = require('./app/war');

const bBottom = new City('Bikini bottom', "bob l'éponge");
const bB = new City('Bikini battom', "bobl'éponge");
/*const guerre = new War();
guerre.battle(
  bBottom.getArmy(),
  bB.getArmy(),
  bBottom.getScience(),
  bB.getScience()
);*/
// BBottom.armyStatus();
setInterval(() => bBottom.scienceInvest(bBottom.getGold() * 0.1), 1000);
setInterval(() => bBottom.giveShit(), 2000);
// BBottom.giveShit();
setInterval(() => bBottom.showShit(), 1000);

// SetInterval(() => bBottom.getShit(bBottom),1000);
