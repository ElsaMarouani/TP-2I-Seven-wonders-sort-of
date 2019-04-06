class Soldier {
  constructor() {
    this.age_ = Math.floor(Math.random() * (25 - 16) + 16); // Soldat engagé entre 16 et 25 ans
    this.ishurt_ = false; // Si le soldat est blessé
    this.isalive_ = true; // Bool pour savoir si le soldat est en vie (sert pour le tri)
  }

  getAge() {
    return this.age_;
  }

  getHurt() {
    return this.ishurt_;
  }

  getAlive() {
    return this.isalive_;
  }

  setHurt(hurt) {
    this.ishurt_ = hurt;
  }

  setAlive(alive) {
    this.isalive_ = alive;
  }

  // passTheYear(){
  //
  // }
}

module.exports = {Soldier};