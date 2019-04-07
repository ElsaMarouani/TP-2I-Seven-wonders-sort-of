const {City} = require('./city');

class Trade{
    trade(city,ressource) {
        return new Promise(resolve => {
            setTimeout(() => {
                const coef=(Math.random()*(1.4 - 1) + 1)*(0.1*city.getScience());
                ressource=ressource*coef;
                resolve(ressource);
            }, 2000);
        });
    }

    async asyncCallGold(city, gold) {
        city.setGold(-gold);
        // console.log('la caravane part...');
        var result = await this.trade(city,gold);
        city.setGold(result);
        // console.log('la caravane est arrivée!!!');
    }

    async asyncCallCorn(city, corn) {
        city.setGold(-corn);
        // console.log('la caravane part...');
        var result = await this.trade(city,corn);
        city.setCorn(result);
        // console.log('la caravane est arrivée!!!');
    }
}

module.exports = {Trade};