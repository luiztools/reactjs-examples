import axios from 'axios';
import Candle from '@/lib/Candle';
import Candlechart from '@/lib/Candlechart';
import Point from '@/lib/Point';

const TICK_SIZE = 0.01;

export async function getData(symbol = 'BTCUSDT', interval = '1m') {
    const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=60`);
    const candles = response.data.map(k => {
        return new Candle(k[0], k[1], k[2], k[3], k[4])
    })

    const candlechart = new Candlechart(response.data, TICK_SIZE);

    let atl = candlechart.lowestPrice();
    let ath = candlechart.highestPrice();
    let medium = candlechart.getMedium(atl, ath);

    const supportTick = candlechart.findSupport(medium);
    const support = [
        new Point(response.data[0][0], parseFloat(supportTick.tick)),
        new Point(response.data[response.data.length - 1][0], parseFloat(supportTick.tick))
    ];

    const resistanceTick = candlechart.findResistance(medium);
    const resistance = [
        new Point(response.data[0][0], parseFloat(resistanceTick.tick)),
        new Point(response.data[response.data.length - 1][0], parseFloat(resistanceTick.tick))
    ];

    return {
        candles,
        support,
        resistance
    };
}