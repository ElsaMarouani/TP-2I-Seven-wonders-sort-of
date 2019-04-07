const {Divinity} = require('./divinity');
const {Soldier} = require('./soldier');

class City {
  constructor(name, divinityName) {
    this.name_ = name || 'UNKCITY';
    this.divinity_ = new Divinity(divinityName);
    this.corn_ = 1000;
    this.gold_ = 1000;
    this.scienceLevel_ = 1;
    this.scienceInvest_ = 0;
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
    return this.scienceLevel_;
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
        this.scienceLevel_
      } `
    );
  }

  scienceInvest(gold) {
    if (this.scienceLevel_ < 99) {
      this.scienceInvest_ += gold;
      this.gold_ -= gold;
      if (this.scienceInvest_ >= this.scienceLevel_ + 1 ** 2 * 1000) {
        this.scienceInvest_ -= this.scienceLevel_ + 1 ** 2 * 1000;
        this.scienceLevel_ += 1;
      }
    }
  }

  soulForTheArmy(gold) {
    let i = 0;
    let nbr = gold / 100;
    if (this.army_.length + nbr < 9999) {
      this.gold -= 100 * nbr;
      for (i = 0; i < nbr; i++) {
        const soldat = new Soldier();
        this.army_.push(soldat);
      }
    } else {
      nbr = 9999 - this.army_.length;
      for (i = 0; i < nbr; i++) {
        const soldat = new Soldier();
        this.army_.push(soldat);
      }
    }
  }

  buryTheDead() {
    this.army_ = this.army_.filter(s => s.isAlive_);
  }

  armyStatus() {
    const mort = this.army_.filter(s => !s.isAlive_).length;
    const injured = this.army_.filter(s => s.isHurt_).length;
    const well = this.army_.filter(s => !s.isHurt_ && s.isAlive_).length;
    console.log(`Morts : ${mort}  Estropiés : ${injured}  Potables : ${well}`);
  }
}

module.exports = {City};
