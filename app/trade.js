const {City} = require('./city');

class Trade{
    trade(ressource) {
        return new Promise(resolve => {
            setTimeout(() => {
                const rand=Math.random()*(1.4 - 1) + 1;
                ressource=ressource*rand;
                resolve(ressource);
            }, 2000);
        });
    }

    async asyncCallGold(city, gold) {
        city.setGold(-gold);
        // console.log('la caravane part...');
        var result = await this.trade(gold);
        city.setGold(result);
        // console.log('la caravane est arrivée!!!');
    }

    async asyncCallCorn(city, corn) {
        city.setGold(-corn);
        // console.log('la caravane part...');
        var result = await this.trade(corn);
        city.setCorn(result);
        // console.log('la caravane est arrivée!!!');
    }
}

module.exports = {Trade};