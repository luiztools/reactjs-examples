import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  const [contador, setContador] = useState(0);

  function increment() {
    setContador(contador + 1);
  }

  return (
    <div className="App">
      <Header title="Header Param" />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <input type="button" value="Clique" onClick={increment} />
      </p>
      <p>{contador}</p> cliques!
    </div>
  );
}

export default App;
