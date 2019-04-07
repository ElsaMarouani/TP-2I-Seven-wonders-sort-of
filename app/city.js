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
    this.gold_ = 100;
    this.scienceLevel_ = 1;
    this.scienceInvest_ = 0;
    this.army_ = [];
    this.soulForTheArmy(300);
    this.init();
  }

  randC(min, max) {
    return Math.random() * (max - min) + min;
  }

  init() {
    this.addWonder();
    this.divinity_.init();
    this.divinity_.worldEvents.on('favor', shit => this.getShit(shit));
    this.divinity_.worldEvents.on('blessing', shit => this.getShit(shit));
    // This.divinity_.worldEvents.on('retribution', s => this.annihilation(s));
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

  limitTheRessources() {
    this.corn_ = Math.floor(this.corn_);
    this.gold = Math.floor(this.gold_);
    if (this.corn_ > 999999999) {
      this.corn_ = 999999999;
    }

    if (this.gold > 999999999) {
      this.gold_ = 999999999;
    }

    if (this.army_.length > 999999) {
      console.log('army too big:', this.army_.length);
    }

    if (this.scienceLevel_ > 99) {
      this.scienceLevel_ = 99;
    }

    if (this.listWonders_.length > 7) {
      console.log(
        'Too much wonder on the same city:',
        this.listWonders_.length
      );
    }

    if (this.scienceInvest_ > 999999999) {
      this.scienceInvest_ = 999999999;
    }
  }

  gettingBlessed() {
    this.divinity_.offeringCorn(this.corn_ * 10);
    this.divinity_.offeringGold(this.gold_ * 10);
    // This.army_ += 50;
    this.scienceLevel_ += 1;
  }

  setGold(gold) {
    this.gold_ += Math.floor(gold);
  }

  setCorn(corn) {
    this.corn_ += Math.floor(corn);
  }

  showShit() {
    console.log(
      `${this.name_}: C ${this.corn_}, G ${this.gold_}, S ${
        this.scienceLevel_
      } `
    );
  }

  // Annihilation(s){
  //   this.army_=s;
  // }

  addWonder() {
    this.listWonders_.push(new Wonder());
  }

  deleteWonder() {
    this.listWonders_.pop();
  }

  buildingWonder() {
    const gold = this.gold_ * this.randC(0, 1);
    this.gold_ -= gold;
    if (this.listWonders_[this.listWonders_.length - 1].buildWonder(gold)) {
      this.wondersAchieved_ += 1;
      return true;
    }

    return false;
  }

  destroyWonderInConstruction() {
    this.deleteWonder();
    this.addWonder();
  }

  // Méthode qui permet d'investir de l'or afin d'améliorer la science, le prix des technoloogies est de plus en plus important
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

  // Méthode de recrutement de nouveaux soldats à prix fixe
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

  // Méthode qui permet de supprimer les soldats morts de l'armée
  buryTheDead() {
    this.army_ = this.army_.filter(s => s.isAlive_);
  }

  // Méthode employé plutot au debuggage afin de voir l'état global de toute l'armée
  // (peut être utile pour l'utilisateur mais pas dans le cadre de simulation)
  armyStatus() {
    const mort = this.army_.filter(s => !s.isAlive_).length;
    const injured = this.army_.filter(s => s.isHurt_).length;
    const well = this.army_.filter(s => !s.isHurt_ && s.isAlive_).length;
    console.log(`Morts : ${mort}  Estropiés : ${injured}  Potables : ${well}`);
  }
}

module.exports = {City};
