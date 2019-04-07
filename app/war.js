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
      attackantsoldiers.forEach(s => s.attackDefeat());
      defensesoldiers.forEach(s => s.defenseVictory());
    } else if (result > 0) {
      attackantsoldiers.forEach(s => s.attackVictory());
      defensesoldiers.forEach(s => s.defenseDefeat());
    } else {
      attackantsoldiers.forEach(s => s.setAlive(false));
      defensesoldiers.forEach(s => s.setAlive(false));
    }
  }
}

module.exports = {War};
