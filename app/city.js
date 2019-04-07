const {Divinity} = require('./divinity');
const {Soldier} = require('./soldier');
const {Wonder} = require('./wonder');

class City {
  constructor(name, divinityName) {
    this.name_ = name || 'UNKCITY';
    this.divinity_ = new Divinity(divinityName);
    this.listWonders_ = [];
    this.wondersAchieved_ = 0;
    this.corn_ = 1000;
    this.gold_ = 1000;
    this.scienceLevel_ = 1;
    this.scienceInvest_ = 0;
    this.army_ = [];
    this.soulForTheArmy(300);
    this.init();
  }

  init() {
    this.addWonder();
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


  addWonder() {
    this.listWonders_.push(new Wonder());
    // Console.log(this.name_, "begin", this.listWonders_[this.listWonders_.length-1].name_);
  }

  deleteWonder() {
    console.log(
        this.listWonders_[this.listWonders_.length - 1].name_,
        'of',
        this.name_,
        'is destroyed !'
    );
    this.listWonders_.pop();
  }

  buildingWonder(gold) {
    if (this.listWonders_[this.listWonders_.length - 1].buildWonder(gold)) {
      this.wondersAchieved_ += 1;
      return true;
    }

    return false;
  }

  destroyWonderInConstruction() {
    // Console.log("nombre merveilles avant destruction: ",this.listWonders_.length);
    this.deleteWonder();
    // Console.log("nombre merveilles après destruction: ",this.listWonders_.length);
    this.addWonder();
    // Console.log("gold needed: ", this.listWonders_[this.listWonders_.length - 1].goldNeededToAchieve_);
  }

  scienceInvest(gold) {
    this.scienceInvest_ += gold;
    this.gold_ -= gold;
    if (this.scienceInvest_ >= this.scienceLevel_ + 1 ** 2 * 1000) {
      this.scienceInvest_ -= this.scienceLevel_ + 1 ** 2 * 1000;
      this.scienceLevel_ += 1;
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
