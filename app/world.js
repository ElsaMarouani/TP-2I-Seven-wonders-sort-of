const R = require('ramda');
const {City} = require('./city');

class World {
  constructor() {
    this.listCities_ = [];
    this.listWondersToPrint_ = [];
    this.listWondersAchieved_ = [0, 0, 0, 0, 0, 0, 0];
    this.listPlayersInformationToPrint_ = [];
    this.textToPrint = [];
    this.writingCounter = 0;
    this.init();
  }

  init() {
    this.cleanText();
    this.printText(
      '                                                         WELCOME TO 7 WONDERS !!!'
    );
    this.printText('');
    this.printText(
      '                                               You will observe the evolution of 7 cities'
    );
    this.printText(
      '                                 They will fight in the blood, pray for the gods and trade for the gold'
    );
    this.printText(
      '                                    The purpose ? Be the first to have 4 of the 7 Antiquity wonders'
    );
    this.printText(
      '                                              This is just a simulation, enjoy the moment !'
    );
    this.printText('');
    this.printText('contact: aymeric.laugel@laposte.net');
  }

  rand(min, max){
    return Math.random() * (max - min) + min;
  }

  addCity(name, divinityName) {
    this.listCities_.push(new City(name, divinityName));
  }

  buildingWonders() {
      for (let city = 0; city < this.listCities_.length; city++) {
        let allWondersAreBuild = 0;
        for (let wonder = 0; wonder < this.listWondersAchieved_.length; wonder++) {
          // On va compter les 1 dans le tableau de listWondersAchieved_ pour voir si toutes les wonders ne sont pas déjà toutes finies
          if (this.listWondersAchieved_[wonder] === 1) {
            allWondersAreBuild += 1;
          }
        }
        if (allWondersAreBuild < 7) {
          if (this.listCities_[city].buildingWonder()) {
            // Si buildingWonder return true, on a bien construit une merveille
            this.printText(this.listCities_[city].name_ + ' achieved ' + this.listCities_[city].listWonders_[this.listCities_[city].listWonders_.length - 1].name_);
            this.listWondersAchieved_[this.listCities_[city].listWonders_[this.listCities_[city].listWonders_.length - 1].wonderChosen_] = 1;
            this.chooseConstructionsToDestroy(this.listCities_[city]); // Il faut donc détruire toutes les autres merveilles du même type encore en construction
            this.listCities_[city].addWonder(); // Puis ajouter une nouvelle merveille à construire à la ville
            this.uniqueWonder(); // Puis vérfier qu'on ne commene pas une merveille déjà fini
          }
        }
        else{
          this.destroyAllWondersInConstruction();
        }
      }

    this.sortCityList();
    // This.listCities_.forEach(city => city.buildingWonder(gold));
  }

  sortCityList() {
    /*this.listCities_ = R.sortBy(
      R.pipe(
        R.prop('listWonders_'),
        R.length
      ),
      this.listCities_
    );*/
  }

  destroyAllWondersInConstruction(){
    for (let city = 0; city < this.listCities_.length; city++){
      if(this.listCities_[city].listWonders_[this.listCities_[city].listWonders_.length -1].isFinished_){
        this.listCities_[city].deleteWonder();
      }
    }
  }


  furyOfTheGods(city){
    for (let wonderD = 0; wonderD < city.listWonders_.length; wonderD++){   //pour toutes les merveilles de cette ville
      if(city.listWonders_[wonderD].isFinished_ === 1){   //si la merveille est finie
        city.listWonders_.splice(wonderD, 1);   //supprimer la merveille
      }
    }
  }

  chooseConstructionsToDestroy(cityWithTheRemainingWonder) {
    // Pour toutes les villes existantes, si tu es en train de construire la même merveille que celle
    for (
      let actualCity = 0;
      actualCity < this.listCities_.length;
      actualCity++
    ) {
      // Qui vient d'être terminée, ta merveille en construction est détruite !!! Il n'y a de la place que pour un !
      if (
        cityWithTheRemainingWonder.listWonders_[
          cityWithTheRemainingWonder.listWonders_.length - 1
        ].name_ ===
          this.listCities_[actualCity].listWonders_[
            this.listCities_[actualCity].listWonders_.length - 1
          ].name_ &&
        this.listCities_[actualCity].name_ !== cityWithTheRemainingWonder.name_
      ) {
        this.listCities_[actualCity].destroyWonderInConstruction();
      }
    }
  }

  uniqueWonder() {
    // On fait en sorte que les villes ne construisent pas des merveilles déjà finies
    let allWondersAreBuild = 0;
    for (let wonder = 0; wonder < this.listWondersAchieved_.length; wonder++) {
      // On va compter les 1 dans le tableau de listWondersAchieved_ pour voir si toutes les wonders ne sont pas déjà toutes finies
      if (this.listWondersAchieved_[wonder] === 1) {
        allWondersAreBuild += 1;
      }
    }

    if (allWondersAreBuild === 7) {
    } else {
      for (let city = 0; city < this.listCities_.length; city++) {
        // Pour chaque ville
        let alreadyBuild = true;
        while (alreadyBuild) {
          if (
            this.listWondersAchieved_[
              this.listCities_[city].listWonders_[
                this.listCities_[city].listWonders_.length - 1
              ].wonderChosen_
            ] === 1
          ) {
            // Si la merveille qu'elle est en train de construire
            // est déjà finie dans une des villes(y compris la sienne), elle doit lancer une autre construction aléatoirement jusqu'à en trouvait une non déjà construite
            this.listCities_[city].destroyWonderInConstruction();
          } else {
            alreadyBuild = false;
          }
        }
      }
    }
  }

  printWonders() {
    for (let i = 0; i < 28; i++) {
      this.listWondersToPrint_[i] = this.goodFormatText('', 10);
    }

    let linesAlreadyPrint = 0;
    for (let city = 0; city < this.listCities_.length; city++) {
      // Pour chaque ville
      if (this.listCities_[city].wondersAchieved_ > 0) {
        // Si la ville a au moins une merveille de construite
        for (
          let wonder = 0;
          wonder < this.listCities_[city].listWonders_.length;
          wonder++
        ) {
          // Pour chaque merveille dans la liste
          if (this.listCities_[city].listWonders_[wonder].isFinished_) {
            // Si la merveille est construite
            if (linesAlreadyPrint + 4 <= 28) {
              for (let linePrint = 0; linePrint < 4; linePrint++) {
                // Pour les 4 lignes du dessin de la merveille
                this.listWondersToPrint_[linesAlreadyPrint] = this.listCities_[
                  city
                ].listWonders_[wonder].drawing_[linePrint]; // Enregistrer le dessin pour l'afficher plus tard
                linesAlreadyPrint += 1;
              }
            } else {
              console.log('Dépassement des dessins de merveilles !!!');
            }
          }
        }
      }
    }
  }

  printPlayersInformation() {
    for (let i = 0; i < 28; i++) {
      this.listPlayersInformationToPrint_[i] = this.goodFormatText('', 13);
    }
    let whereToPrint = 0;
    for (let city = 0; city < this.listCities_.length; city++) {
      this.listCities_[city].limitTheRessources();
      // Pour chaque ville
      if (this.listCities_[city].wondersAchieved_ > 0) {
        // Si la ville a au moins une merveille de construite
        this.listPlayersInformationToPrint_[whereToPrint] = this.goodFormatText(
          this.listCities_[city].name_,
          13
        );
        this.listPlayersInformationToPrint_[whereToPrint + 1] =
           'G:' + this.goodFormatText(this.listCities_[city].gold_, 11);
        this.listPlayersInformationToPrint_[whereToPrint + 2] =
          'C:' + this.goodFormatText(this.listCities_[city].corn_, 11);
        this.listPlayersInformationToPrint_[whereToPrint + 3] =
          'A:' +
          this.goodFormatText(this.listCities_[city].army_.length, 6) +
          ' S:' +
          this.goodFormatText(this.listCities_[city].scienceLevel_, 2);
        whereToPrint += 4 * this.listCities_[city].wondersAchieved_;
      }
    }
  }

  cleanText() {
    this.writingCounter = 0;
    for (let i = 0; i < 8; i++) {
      this.textToPrint[i] = this.goodFormatText('', 139);
    }
  }

  printText(text) {
    if (this.writingCounter < 8) {
      this.textToPrint[this.writingCounter] = this.goodFormatText(text, 139);
      this.writingCounter += 1;
    }
  }

  goodFormatText(wordToPrint, lengthToHave) {
    // On veut rajouter le bon nombre d'espace aux variables lors de l'affichage pour ne pas décaler les bords
    if (typeof wordToPrint === 'number') {
      // Si c'est un nombre
      wordToPrint = String(Math.floor(wordToPrint)); // On le change en string pour le traitement
    }

    if (typeof wordToPrint === 'string') {
      if (wordToPrint.length <= lengthToHave) {
        while (wordToPrint.length < lengthToHave) {
          // Tant que le string est trop petit
          wordToPrint += ' '; // Rajoute des espaces pour avoir la taille demandée
        }

        return wordToPrint;
      }

      return 'This text is too long !';
    }

    return 'What the hell is that type ?!';
  }

  printWorld(){

    /*
        Console.log("                                                                                          --- SEVEN WONDERS ---                                                                                         ");
        console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
        console.log("|                                                                                                                                             |        12345678912      Athènes123456        1234567891|");
        console.log("|                                                                                                                                             |                         G:000000000          1234567891|");
        console.log("|                                                                                                                                                                       C:000000000          1234567891|");
        console.log("|                                                                                                                                                                       A:0000 S:00          1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                       12345678912        1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                                      |");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("|                                                                                                                                                                                            1234567891|");
        console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------");
*/

    console.log('                                                                                          --- SEVEN WONDERS ---                                                                                         ');
    console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
    console.log('|             \\                        \\    Ephesus                                                                                           |                          ', this.listPlayersInformationToPrint_[0], '   ', this.listWondersToPrint_[0], '|');
    console.log('|              |                        |_   -----                                                                                            |                          ', this.listPlayersInformationToPrint_[1], '   ', this.listWondersToPrint_[1], '|');
    console.log('|   Olympia    /                          \\ | A B | Halicarnassus                   _________                                                 |                          ', this.listPlayersInformationToPrint_[2], '   ', this.listWondersToPrint_[2], '|');
    console.log('|    -----    /                           | | D C |     -----                      /         \\__                                              |                          ', this.listPlayersInformationToPrint_[3], '   ', this.listWondersToPrint_[3], '|');
    console.log('|   | A B |  |                            |  -----     | A B |                    /              \\                                            |                                                        |');
    console.log('|   | D C |  |                             \\____       | D C |                   |                |                                           |                          ', this.listPlayersInformationToPrint_[4], '   ', this.listWondersToPrint_[4], '|');
    console.log('|_   -----  _/                                   \\____  -----   Rhodes        __/                  \\                                          |                          ', this.listPlayersInformationToPrint_[5], '   ', this.listWondersToPrint_[5], '|');
    console.log('| \\_     _/                                            \\__       -----      /                       |_                                        |                          ', this.listPlayersInformationToPrint_[6], '   ', this.listWondersToPrint_[6], '|');
    console.log('|    \\__/                                                  \\__  | A B |    |                           \\_                                     |                          ', this.listPlayersInformationToPrint_[7], '   ', this.listWondersToPrint_[7], '|');
    console.log('|                                                             | | D C |    /                             |                                    |                                                        |');
    console.log('|                                                             |  -----   _/                              |                                    |                          ', this.listPlayersInformationToPrint_[8], '   ', this.listWondersToPrint_[8], '|');
    console.log('|                                                              \\_______/                                 \\_                                   |                          ', this.listPlayersInformationToPrint_[9], '   ', this.listWondersToPrint_[9], '|');
    console.log('|                                                                                                          |                    Babylon       |                          ', this.listPlayersInformationToPrint_[10], '   ', this.listWondersToPrint_[10], '|');
    console.log('|                                                                                                          |                     -----        |                          ', this.listPlayersInformationToPrint_[11], '   ', this.listWondersToPrint_[11], '|');
    console.log('|                           ______                                                                        _|                    | A B |       |                                                        |');
    console.log('|                          /      \\________                                                              /                      | D C |       |                          ', this.listPlayersInformationToPrint_[12], '   ', this.listWondersToPrint_[12], '|');
    console.log('|                       __/                  \\_____                 ______                              _|                       -----        |                          ', this.listPlayersInformationToPrint_[13], '   ', this.listWondersToPrint_[13], '|');
    console.log('|                     _/              Alexandria   \\__         ____/      \\____                    ___/                                       |                          ', this.listPlayersInformationToPrint_[14], '   ', this.listWondersToPrint_[14], '|');
    console.log('|\\                   |                  -----         \\______/                 \\_____             /                                           |                          ', this.listPlayersInformationToPrint_[15], '   ', this.listWondersToPrint_[15], '|');
    console.log('| \\_                 |                 | A B |                                       \\            |                                           |                                                        |');
    console.log('|   |              __/                 | D C |                      Giza             |            /                                           |                          ', this.listPlayersInformationToPrint_[16], '   ', this.listWondersToPrint_[16], '|');
    console.log('|   \\__        __/                      -----                      -----              \\___       |                                            |                          ', this.listPlayersInformationToPrint_[17], '   ', this.listWondersToPrint_[17], '|');
    console.log('|      \\______/                                                   | A B |                 \\_____/                                             |                          ', this.listPlayersInformationToPrint_[18], '   ', this.listWondersToPrint_[18], '|');
    console.log('|                                                                 | D C |                                                                     |                          ', this.listPlayersInformationToPrint_[19], '   ', this.listWondersToPrint_[19], '|');
    console.log('|                                                                  -----                                                                      |                                                        |');
    console.log('|---------------------------------------------------------------------------------------------------------------------------------------------|                          ', this.listPlayersInformationToPrint_[20], '   ', this.listWondersToPrint_[20], '|');
    console.log('|', this.textToPrint[0], '|                          ', this.listPlayersInformationToPrint_[21], '   ', this.listWondersToPrint_[21], '|');
    console.log('|', this.textToPrint[1], '|                          ', this.listPlayersInformationToPrint_[22], '   ', this.listWondersToPrint_[22], '|');
    console.log('|', this.textToPrint[2], '|                          ', this.listPlayersInformationToPrint_[23], '   ', this.listWondersToPrint_[23], '|');
    console.log('|', this.textToPrint[3], '|                                                        |');
    console.log('|', this.textToPrint[4], '|                          ', this.listPlayersInformationToPrint_[24], '   ', this.listWondersToPrint_[24], '|');
    console.log('|', this.textToPrint[5], '|                          ', this.listPlayersInformationToPrint_[25], '   ', this.listWondersToPrint_[25], '|');
    console.log('|', this.textToPrint[6], '|                          ', this.listPlayersInformationToPrint_[26], '   ', this.listWondersToPrint_[26], '|');
    console.log('|', this.textToPrint[7], '|                          ', this.listPlayersInformationToPrint_[27], '   ', this.listWondersToPrint_[27], '|');
    console.log('--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------');


  }

  Victory(){
    
  }

  showWorld() {
      this.buildingWonders(4000)   //investit de 30 à 70% de son or dans sa merveille
    for (let cityW = 0; cityW < this.listCities_.length; cityW++){
      this.listCities_[cityW].buryTheDead();
      this.listCities_[cityW].gettingBlessed();
      this.listCities_[cityW].soulForTheArmy(this.listCities_[cityW].gold_ * this.rand(0.2,0.5));  //investit de20 à 50% de son or dans l'armée
      this.listCities_[cityW].scienceInvest(this.listCities_[cityW].gold_ * this.rand(0.1,0.3));    //investit de 10 à 30% de son or dans la recherche
    }

    this.uniqueWonder();
    this.printWonders();
    this.printPlayersInformation();
    this.printWorld();
    this.cleanText();
  }
}

module.exports = {World};
