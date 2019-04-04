const {City} = require('./city');
const R = require('ramda');

class War {


  battle(attackantsoldiers, defensesoldiers, attackscience, defensescience) {
    let attackpower;
    let defensepower;
    let result;
    attackpower =
      attackantsoldiers.length() *
      (Math.random() * (1.5 - 0.5) + 0.5) *
      attackscience;
    defensepower =
      defensesoldiers.size() *
      (Math.random() * (1.5 - 0.5) + 0.5) *
      defensescience;
    result = attackpower - defensepower;
    if (result < 0) {
      attackantsoldiers.forEach(Math.random() < 0.6)
        ? (attackantsoldiers[idx].isalive_ = false)
        : (attackantsoldiers[idx].hurt_ = true);
      defensesoldiers.forEach(Math.random() < 0.25)
        ? (defensesoldiers[idx].hurt_ = true)
        : false;
    } else if (result > 0) {
      attackantsoldiers.forEach(Math.random() < 0.4)
        ? (attackantsoldiers[idx].isalive_ = false)
        : (attackantsoldiers[idx].hurt_ = true);
      defensesoldiers.forEach(Math.random() < 0.4)
        ? (defensesoldiers[idx].hurt_ = true)
        : false;
    } else {
      attackantsoldiers.forEach((attackantsoldiers[idx].isalive_ = false));
      defensesoldiers.forEach((defensesoldiers[idx].isalive_ = false));
    }
  }
}

module.exports = {War};