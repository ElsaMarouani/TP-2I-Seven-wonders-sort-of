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
        Math.random() < 0.6 ? s => s.setAlive(false) : s => s.setHurt(true)
      );
      defensesoldiers.forEach(
        Math.random() < 0.25 ? s => s.setHurt(true) : s => s.setHurt(false)
      );
    } else if (result > 0) {
      attackantsoldiers.forEach(
        Math.random() < 0.4 ? s => s.setAlive(false) : s => s.setHurt(true)
      );
      defensesoldiers.forEach(
        Math.random() < 0.4 ? s => s.setHurt(true) : s => s.setHurt(false)
      );
    } else {
      attackantsoldiers.forEach(s => s.setAlive(false));
      defensesoldiers.forEach(s => s.setAlive(false));
    }
  }
}

module.exports = {War};
