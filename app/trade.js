class Trade {
  trade(city, ressource) {
    return new Promise(resolve => {
      setTimeout(() => {
        const coef =
          (Math.random() * (1.4 - 1) + 1) * (0.1 * city.getScience());
        ressource *= coef;
        resolve(ressource);
      }, 2000);
    });
  }

  async asyncCallGold(city, gold) {
    city.setGold(-gold);
    // Console.log('la caravane part...');
    const result = await this.trade(city, gold);
    city.setGold(result);
    // Console.log('la caravane est arrivée!!!');
  }

  async asyncCallCorn(city, corn) {
    city.setGold(-corn);
    // Console.log('la caravane part...');
    const result = await this.trade(city, corn);
    city.setCorn(result);
    // Console.log('la caravane est arrivée!!!');
  }
}

module.exports = {Trade};
