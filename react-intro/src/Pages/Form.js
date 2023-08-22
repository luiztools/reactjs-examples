import { useEffect } from 'react';
import Header from '../Header';
import axios from 'axios';

function Form() {

    useEffect(() => {
        axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(response => {
                console.log(response.data);
            })
    }, []);

    return (
        <div>
            <Header title="React Form" />
            <form>
                <fieldset>
                    <legend>
                        <h2>Dados de Cadastro</h2>
                    </legend>

                    <div>
                        <label>Nome:
                            <input type="text" name="txtNome" id="txtNome" />
                        </label>
                    </div>

                    <div>
                        <label>Idade:
                            <input type="number" name="txtIdade" id="txtIdade" />
                        </label>
                    </div>

                    <div>
                        <label>UF:
                            <select name="cmbUF" id="cmbUF" >
                                <option value="0">Selecione uma opção</option>
                            </select>
                        </label>
                    </div>
                    <input type="submit" value="Salvar" />
                </fieldset>
            </form>
        </div>
    )
}

export default Form;