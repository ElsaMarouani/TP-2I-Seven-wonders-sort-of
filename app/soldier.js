class Soldier {
  constructor() {
    this.age_ = Math.floor(Math.random() * (25 - 16) + 16); // Soldat engagé entre 16 et 25 ans
    this.hurt_ = false; // Si le soldat est blessé
    this.isalive_ = true; // Bool pour savoir si le soldat est en vie (sert pour le tri)
  }
}

module.exports = {Soldier};
