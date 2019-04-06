const {Soldier} = require('./soldier');

class War {
  battle(attackantsoldiers, defensesoldiers, attackscience, defensescience) {
    const attackpower =
        attackantsoldiers.length *
        (Math.random() * (1.5 - 0.5) + 0.5) *
        attackscience;
    const defensepower =
        defensesoldiers.length *
        (Math.random() * (1.5 - 0.5) + 0.5) *
        defensescience;
    const result = attackpower - defensepower;
    if (result < 0) {
      attackantsoldiers.forEach(
          (Math.random() < 0.6) ? this.setAlive(false) : this.setHurt(true)
      );
      defensesoldiers.forEach(function() {
        (Math.random() < 0.25) ? this.setHurt(true) : false
      });
    } else if (result > 0) {
      attackantsoldiers.forEach(
          (Math.random() < 0.4) ? this.setAlive(false) : this.setHurt(true)
      );
      defensesoldiers.forEach(
          (Math.random() < 0.4) ? this.setHurt(true) : false
      );
    } else {
      attackantsoldiers.forEach(this.setAlive(false));
      defensesoldiers.forEach(this.setAlive(false));
    }
  }
}

module.exports = {War};