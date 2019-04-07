const {City} = require('./city');

class Trade{
    trade(gold) {
        return new Promise(resolve => {
            setTimeout(() => {
                const rand=Math.random()*(1.4 - 1) + 1;
                gold=gold*rand;
                resolve(gold);
            }, 2000);
        });
    }

    async asyncCall(city, gold) {
        city.setGold(-gold);
        console.log('la caravane part...');
        var result = await this.trade(gold);
        city.setGold(result);
        console.log('la caravane est arrivée !!!');
    }
}

module.exports = {Trade};