import { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/react.svg'
import Header from '../Header.jsx';


function Home() {

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
            <Link to="/cadastro">Acessar cadastro</Link>
        </div>
    );
}

export default Home;
