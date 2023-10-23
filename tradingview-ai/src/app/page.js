"use client"

import { useState, useEffect } from 'react';
import { getData } from '@/services/DataService';;
import Chart from './components/Chart';
import useWebSocket from 'react-use-websocket';
import CandlePoint from '@/lib/CandlePoint';
import LinePoint from '@/lib/LinePoint'

function App() {

  const [symbol, setSymbol] = useState("BTCUSDT");

  const [interval, setInterval] = useState("1m");

  const [data, setData] = useState({
    candles: [],
    support: [],
    resistance: []
  });

  const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`, {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: () => {
      if (lastJsonMessage) {
        const newCandle = new CandlePoint(lastJsonMessage.k.t, lastJsonMessage.k.o, lastJsonMessage.k.h, lastJsonMessage.k.l, lastJsonMessage.k.c);
        
        const newCandles = [...data.candles];
        const newSupport = [...data.support];
        const newResistance = [...data.resistance];

        if (lastJsonMessage.k.x === false) { //candle incompleto
          newCandles[newCandles.length - 1] = newCandle;//substitui último candle pela versão atualizada
        }
        else {
          //remove candle primeiro candle e adiciona o novo último
          newCandles.splice(0, 1);
          newCandles.push(newCandle);

          //atualiza suporte
          newSupport.splice(1, 1);
          newSupport.push(new LinePoint(newCandle.x, newSupport[0].y));

          //atualiza resistencia
          newResistance.splice(1, 1);
          newResistance.push(new LinePoint(newCandle.x, newResistance[0].y));
        }

        setData({ candles: newCandles, support: newSupport, resistance: newResistance });
      }
    },
    onError: (event) => console.error(event),
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  useEffect(() => {
    getData(symbol, interval)
      .then(data => setData(data))
      .catch(err => alert(err.response ? err.response.data : err.message))
  }, [symbol, interval])

  function onSymbolChange(event) {
    setSymbol(event.target.value);
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
  }

  return (
    <>
      <select onChange={onSymbolChange} value={symbol}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>ADAUSDT</option>
      </select>
      <select onChange={onIntervalChange} value={interval}>
        <option>1m</option>
        <option>15m</option>
        <option>1h</option>
        <option>1d</option>
      </select>
      <Chart data={data} />
    </>
  );
}

export default App;
