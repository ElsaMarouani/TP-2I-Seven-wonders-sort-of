const {Divinity} = require('./divinity');
const {Soldier} = require('./soldier');

class City {
  constructor(name, divinityName) {
    this.name_ = name || 'UNKCITY';
    this.divinity_ = new Divinity(divinityName);
    this.corn_ = 1000;
    this.gold_ = 1000;
    this.sciencelevel_ = 1;
    this.scienceinvest_ = 0;
    this.army_ = [];
    this.soulForTheArmy(300);
    this.init();
  }

  init() {
    this.divinity_.init();
    this.divinity_.worldEvents.on('favor', shit => this.getShit(shit));
    this.divinity_.worldEvents.on('blessing', shit => this.getShit(shit));
  }

  getGold() {
    return this.gold_;
  }

  getCorn() {
    return this.corn_;
  }

  getArmy() {
    return this.army_;
  }

  getScience() {
    return this.sciencelevel_;
  }

  getShit(s) {
    this.corn_ += Math.floor(s.corn);
    this.gold_ += Math.floor(s.gold);
  }

  giveShit() {
    this.divinity_.offeringCorn(this.corn_);
    this.divinity_.offeringGold(this.gold_);
    // This.corn_ = 0;
    // this.gold_ = 0;
  }

  showShit() {
    console.log(
        `${this.name_}: C ${this.corn_}, G ${this.gold_}, S ${
            this.sciencelevel_
            } `
    );
  }

  scienceInvest(gold) {
    this.scienceinvest_ += gold;
    this.gold_ -= gold;
    if (this.scienceinvest_ >= this.sciencelevel_ + 1 ** 2 * 1000) {
      this.scienceinvest_ -= this.sciencelevel_ + 1 ** 2 * 1000;
      this.sciencelevel_ += 1;
    }
  }

  soulForTheArmy(gold) {
    let i = 0;
    const nbr = gold / 100;
    const soldat = new Soldier();
    this.gold -= 100 * nbr;
    for (i = 0; i < nbr; i++) {
      this.army_.push(soldat);
    }
  }

  armyStatus() {

    const old = (this.army_.filter(s => s.age > 55)).length;
    const injured = this.army_.filter(s => s.ishurt).length;
    const well = this.army_.filter(s => !s.ishurt).length;
    console.log(`Vieux : ${old}  Estropiés : ${injured}  Potables : ${well}`);
  }
}

module.exports = {City};
