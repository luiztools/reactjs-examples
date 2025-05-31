import { useState, useEffect } from 'react';
import { getCandles } from './DataService';
import useWebSocket from 'react-use-websocket';
import Candle from './Candle';
import Chart from './Chart';

function App() {

  const [symbol, setSymbol] = useState("BTCUSDT");

  const [interval, setInterval] = useState("1m");

  const [data, setData] = useState([]);

  useWebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`, {
    onOpen: () => console.log(`Connected to App WS`),
    onMessage: (message) => {
      if (!message) return;
      const data = JSON.parse(message.data);
      const newCandle = new Candle(data.k.t, data.k.o, data.k.h, data.k.l, data.k.c);
      const newData = [...data];
      if (data.k.x === false) { //candle incompleto
        newData[newData.length - 1] = newCandle;//substitui último candle pela versão atualizada
      }
      else {//remove candle primeiro candle e adiciona o novo último
        newData.splice(0, 1);
        newData.push(newCandle);
      }

      setData(newData);
    },
    onError: (event) => console.error(event),
    shouldReconnect: (closeEvent) => true,
    reconnectInterval: 3000
  });

  useEffect(() => {
    getCandles(symbol, interval)
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
