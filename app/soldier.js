class Soldier {
  constructor() {
    this.age_ = Math.floor(Math.random() * (25 - 16) + 16); // Soldat engagé entre 16 et 25 ans
    this.isHurt_ = false; // Si le soldat est blessé
    this.isAlive_ = true; // Bool pour savoir si le soldat est en vie (sert pour le tri)
    setTimeout( //le setTimeout permet de fixer une "date de mort" du soldat
      () => (this.isAlive_ = false),
      1000 * ((Math.random() * (70 - 55) + 55)-this.age_)
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


  //les méthodes suivantes sont pour la classe guerre et permettent de faire appel à un random pour chaque soldat
  attackVictory(){
    const s=Math.random();
    (s< 0.4) ? this.isAlive_=false : this.isHurt_=true;
  }

  attackDefeat(){
    const s=Math.random();
    (s< 0.6) ? this.isAlive_=false : this.isHurt_=true;
  }

  defenseVictory(){
    const s=Math.random();
    (s< 0.25) ? this.isHurt_=true : this.setHurt=false
  }

  defenseDefeat(){
    const s=Math.random();
    (s< 0.4) ? this.isHurt_=true : this.setHurt=false
  }

}

module.exports = {Soldier};
