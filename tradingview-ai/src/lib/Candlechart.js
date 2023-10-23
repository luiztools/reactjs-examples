export default class CandleChart {
    constructor(arr, tickSize) {
        this.candles = arr;
        this.TICK_SIZE = tickSize;
    }

    highestPrice() {
        const orderedKlines = this.candles.sort((a, b) => a.getHigh() - b.getHigh());
        return orderedKlines[orderedKlines.length - 1].getHigh();
    }

    lowestPrice() {
        const orderedKlines = this.candles.sort((a, b) => a.getLow() - b.getLow());
        return orderedKlines[0].getLow();
    }

    getMedium() {
        let atl = this.lowestPrice();
        let ath = this.highestPrice();
        return ((ath - atl) / 2) + atl;
    }

    getTrendTick(grouped, total) {
        let tickArr = Object.keys(grouped).map(k => {
            return { tick: k, count: grouped[k] }
        });
        tickArr = tickArr.sort((a, b) => a.count - b.count);
        return { ...tickArr[tickArr.length - 1], total };
    }

    getTicks(candle) {
        const priceOsc = candle.getHigh() - candle.getLow();
        return priceOsc * (1 / this.TICK_SIZE);
    }

    getGroupedTicks(grouped, candle) {
        const ticks = this.getTicks(candle);
        for (let i = 0; i < ticks; i++) {
            const tick = candle.getLow() + (this.TICK_SIZE * i);
            if (grouped[tick])
                grouped[tick]++;
            else
                grouped[tick] = 1;
        }
        return grouped;
    }

    findSupport() {
        const medium = this.getMedium();

        const candles = this.candles.filter(candle => candle.getLow() < medium);
        let grouped = {};
        candles.map(candle => grouped = this.getGroupedTicks(grouped, candle));

        return this.getTrendTick(grouped, candles.length);
    }

    findResistance() {
        const medium = this.getMedium();

        const candles = this.candles.filter(candle => candle.getHigh() > medium);
        let grouped = {};
        candles.map(candle => grouped = this.getGroupedTicks(grouped, candle));

        return this.getTrendTick(grouped, candles.length);
    }
}