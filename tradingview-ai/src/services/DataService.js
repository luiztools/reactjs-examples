import axios from 'axios';
import CandlePoint from '@/lib/CandlePoint';
import CandleChart from '@/lib/CandleChart';
import LinePoint from '@/lib/LinePoint';

const TICK_SIZE = 0.01;

export async function getData(symbol = 'BTCUSDT', interval = '1m') {
    const response = await axios.get(`https://api.binance.com/api/v3/klines?symbol=${symbol.toUpperCase()}&interval=${interval}&limit=60`);
    const candles = response.data.map(k => {
        return new CandlePoint(k[0], k[1], k[2], k[3], k[4])
    })

    const candlechart = new CandleChart(candles, TICK_SIZE);

    const supportTick = candlechart.findSupport();
    const support = [
        new LinePoint(response.data[0][0], parseFloat(supportTick.tick)),
        new LinePoint(response.data[response.data.length - 1][0], parseFloat(supportTick.tick))
    ];

    const resistanceTick = candlechart.findResistance();
    const resistance = [
        new LinePoint(response.data[0][0], parseFloat(resistanceTick.tick)),
        new LinePoint(response.data[response.data.length - 1][0], parseFloat(resistanceTick.tick))
    ];

    return {
        candles,
        support,
        resistance
    };
}