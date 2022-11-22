import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReCAPTCHA from "react-google-recaptcha";

function App() {

  const [captcha, setCaptcha] = useState("");

  function onClick() {
    if (captcha)
      alert('captcha resolvido');
    else
      alert('captcha pendente');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Test the captcha feature below
        </p>
        <button onClick={onClick}>Click Me</button>
        <ReCAPTCHA
          sitekey={process.env.REACT_APP_SITE_KEY}
          onChange={setCaptcha} />
      </header>
    </div>
  );
}

export default App;
