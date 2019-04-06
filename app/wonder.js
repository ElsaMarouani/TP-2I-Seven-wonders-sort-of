/*
La Pyramide de Khéops garde les ressources
Les Jardins suspendus de Babylone alimentent les troupes
La Statue de Zeus plus de chance d'avoir un super
Le Mausolée d'Halicarnasse  ramène les morts
Le Temple d'Artémis rallonge durée vie soldats
Le Colosse de Rhodes meilleur en défense
Le Phare d'Alexandrie pour le commerce
*/

class Wonder {
  constructor() {
    this.name_ = 'UnknowWonder';
    this.drawing_ = {
      0: '          ',
      1: '          ',
      2: '          ',
      3: '          '
    };
    this.wonderChosen_ = -1;
    this.actualGoldInvested_ = 0;
    this.goldNeededToAchieve_ = 5000;
    this.TheGreatPyramid_ = 1;
    this.TheHangingGardens_ = 1;
    this.TheStatueOfZeus_ = 1;
    this.TheTempleOfArtemis_ = 1;
    this.TheMausoleumOfHalicarnassus_ = 1;
    this.TheColossusOfRhodes_ = 1;
    this.TheLighthouseOfAlexandria_ = 1;
    this.chooseWonder();
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  chooseWonder() {
    this.wonderChosen_ = this.getRandomInt(7);
    if (this.wonderChosen_ === 0) {
      this.name_ = 'The Great Pyramid';
    } else if (this.wonderChosen_ === 1) {
      this.name_ = 'The Hanging Gardens';
    } else if (this.wonderChosen_ === 2) {
      this.name_ = 'The Statue of Zeus';
    } else if (this.wonderChosen_ === 3) {
      this.name_ = 'The Temple of Artemis';
    } else if (this.wonderChosen_ === 4) {
      this.name_ = 'The Mausoleum of Halicarnassus';
    } else if (this.wonderChosen_ === 5) {
      this.name_ = 'The Colossus of Rhodes';
    } else {
      this.name_ = 'The Lighthouse of Alexandria';
    }

    // Console.log('Begin The wonder', this.name, 'construction.');
    this.drawWonder();
  }

  buildWonder(gold) {
    this.actualGoldInvested_ += gold;
    if (this.actualGoldInvested_ >= this.goldNeededToAchieve_) {
      return this.wonderFinished();
    }

    //console.log(this.goldNeededToAchieve_ - this.actualGoldInvested_, 'needed to finish', this.name_);
    return false;
  }

  wonderFinished() {
    if (this.wonderChosen_ === 0) {
      this.TheGreatPyramid_ = 10;
    } else if (this.wonderChosen_ === 1) {
      this.TheHangingGardens_ = 10;
    } else if (this.wonderChosen_ === 2) {
      this.TheStatueOfZeus_ = 10;
    } else if (this.wonderChosen_ === 3) {
      this.TheTempleOfArtemis_ = 10;
    } else if (this.wonderChosen_ === 4) {
      this.TheMausoleumOfHalicarnassus_ = 10;
    } else if (this.wonderChosen_ === 5) {
      this.TheColossusOfRhodes_ = 10;
    } else {
      this.TheLighthouseOfAlexandria_ = 10;
    }

    //console.log(this.name_, 'finished.');
    this.actualGoldInvested_ = 0;
    return true;
  }

  drawWonder() {
    if (this.wonderChosen_ === 0) {
      this.drawing_[0] = '          ';
      this.drawing_[1] = '    /\\    ';
      this.drawing_[2] = ' /\\/  /\\  ';
      this.drawing_[3] = '/ /__/__\\ ';
    } else if (this.wonderChosen_ === 1) {
      this.drawing_[0] = '  ******  ';
      this.drawing_[1] = ' *|****|* ';
      this.drawing_[2] = ' *|\\||/|* ';
      this.drawing_[3] = ' /______\\ ';
    } else if (this.wonderChosen_ === 2) {
      this.drawing_[0] = '    @  |  ';
      this.drawing_[1] = ' , _|_ |  ';
      this.drawing_[2] = ' |/_|_\\|  ';
      this.drawing_[3] = '  |   ||  ';
    } else if (this.wonderChosen_ === 3) {
      this.drawing_[0] = '  _____   ';
      this.drawing_[1] = ' /-----\\  ';
      this.drawing_[2] = ' |||||||  ';
      this.drawing_[3] = '--------- ';
    } else if (this.wonderChosen_ === 4) {
      this.drawing_[0] = '    /\\    ';
      this.drawing_[1] = '   /__\\   ';
      this.drawing_[2] = '   ||||   ';
      this.drawing_[3] = '  |----|  ';
    } else if (this.wonderChosen_ === 5) {
      this.drawing_[0] = ' &  @     ';
      this.drawing_[1] = ' |__|_    ';
      this.drawing_[2] = '    | \\   ';
      this.drawing_[3] = '   / \\    ';
    } else {
      this.drawing_[0] = '   (#)    ';
      this.drawing_[1] = '   | |    ';
      this.drawing_[2] = '  _| |_   ';
      this.drawing_[3] = ' |     |  ';
    }
  }
}

module.exports = {Wonder};
