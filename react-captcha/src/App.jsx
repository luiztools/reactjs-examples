import { useState } from 'react';
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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', width: 1200 }}>
      <div style={{marginBottom: 10}}>
        Test the captcha feature below
      </div>
      <div style={{marginBottom: 10}}>
        <button onClick={onClick}>Click Me</button>
      </div>
      <div>
        <ReCAPTCHA
          sitekey={import.meta.env.VITE_SITE_KEY}
          onChange={setCaptcha} />
      </div>
    </div>
  )
}

export default App
