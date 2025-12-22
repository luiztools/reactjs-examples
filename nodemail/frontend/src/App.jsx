import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [campos, setCampos] = useState({
    nome: '',
    email: '',
    mensagem: '',
    anexo: ''
  });

  const [message, setMessage] = useState({ text: "", success: true });
  const [isLoading, setIsLoading] = useState(false);

  function onInputChange(event) {
    if (event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
    setCampos(campos);
  }

  async function onFormSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    Object.keys(campos).forEach(key => formData.append(key, campos[key]));

    try {
      const headers = { "Content-Type": `multipart/form-data; boundary=${formData._boundary}` };
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/send`, formData, { headers });
      console.log(data);
      setMessage({ text: "Mensagem enviada com sucesso", success: true });
      setIsLoading(false);
    } catch (err) {
      setMessage({ text: "Erro ao enviar mensagem" + err.message, success: false });
      setIsLoading(false);
    }
  }

  return (
    <div className="container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="text" id="email" name="email" placeholder="E-mail de destino.." onChange={onInputChange} />

        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Nome da pessoa.." onChange={onInputChange} />

        <label htmlFor="mensagem">Mensagem</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva algo.." className="textArea" onChange={onInputChange}></textarea>

        <label htmlFor="anexo">Anexo</label>
        <input type="file" id="anexo" name="anexo" onChange={onInputChange} />

        <input type="submit" value={isLoading ? "Enviando..." : "Enviar"} disabled={isLoading} />
        {message.text && <div className={message.success ? "message-success" : "message-error"}>{message.text}</div>}
      </form>
    </div>
  );
}

export default App
