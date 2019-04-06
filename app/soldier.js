class Soldier {
  constructor() {
    this.age_ = Math.floor(Math.random() * (25 - 16) + 16); // Soldat engagé entre 16 et 25 ans
    this.isHurt_ = false; // Si le soldat est blessé
    this.isAlive_ = true; // Bool pour savoir si le soldat est en vie (sert pour le tri)
    setTimeout(
      () => (this.isAlive_ = false),
      1000 * (Math.random() * (70 - 55) + 55)
    );
  }

  getAge() {
    return this.age_;
  }

  getHurt() {
    return this.isHurt_;
  }

  getAlive() {
    return this.isAlive_;
  }

  setHurt(hurt) {
    this.isHurt_ = hurt;
  }

  setAlive(alive) {
    this.isAlive_ = alive;
  }
}

module.exports = {Soldier};
