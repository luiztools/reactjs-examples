import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";

type Cliente = {
    nome: string;
    idade: number;
    uf: string;
}

type Estado = {
    sigla: string;
}

function Form() {

    const [estados, setEstados] = useState<Estado[]>([]);

    const [cliente, setCliente] = useState<Cliente>({
        nome: "",
        idade: 0,
        uf: "RS"
    });

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then(response => setEstados(response.data))
    }, [])

    function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCliente({ ...cliente, nome: event.target.value });
    }

    function handleAgeChange(event: React.ChangeEvent<HTMLInputElement>) {
        setCliente({ ...cliente, idade: parseInt(event.target.value) });
    }

    function handleUFChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setCliente({ ...cliente, uf: event.target.value });
    }

    function btnSalvarClick() {
        alert(cliente.nome + cliente.idade + cliente.uf)
    }

    return (
        <>
            <Header title="Form Page" />
            <div>
                <form>
                    <fieldset>
                        <legend>
                            <h2>Dados de Cadastro</h2>
                        </legend>

                        <div>
                            <label>Nome:
                                <input type="text" id="name" onChange={handleNameChange} value={cliente.nome} />
                            </label>
                        </div>
                        <div>
                            <label>Idade:
                                <input type="number" id="idade" onChange={handleAgeChange} value={cliente.idade} />
                            </label>
                        </div>
                        <div>
                            <label>UF:
                                <select id="uf" onChange={handleUFChange} value={cliente.uf}>
                                    {
                                        estados.map(estado => (<option value={estado.sigla}>{estado.sigla}</option>))
                                    }
                                </select>
                            </label>
                        </div>
                        <button type="button" onClick={btnSalvarClick}>Salvar Cadastro</button>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Form;