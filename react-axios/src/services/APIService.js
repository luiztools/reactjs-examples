//import axios from "./BaseService";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export async function getFunction() {
    const response = await axios.get(`${API_URL}/`);
    return response.data;
}

export async function postFunction() {
    const body = { nome: 'LuizTools', idade: 35, uf: 'RS' };
    const response = await axios.post(`${API_URL}/cadastro`, body);
    return response.data;
}

export async function getRequest() {
    const response = await axios({
        method: 'GET',
        url: `${API_URL}/`
    })
    return response.data;
}

export async function postRequest() {
    const body = { nome: 'LuizTools', idade: 35, uf: 'RS' };
    const response = await axios({
        method: 'POST',
        url: `${API_URL}/cadastro`,
        data: body
    })
    return response.data;
}

export async function authFunction() {
    const body = { nome: 'LuizTools', idade: 35, uf: 'RS' };
    //const headers = { 'authorization': "123" };
    //const response = await axios.post(`${API_URL}/cadastro`, body, { headers });
    const response = await axios.post(`${API_URL}/cadastro`, body);
    return response.data;
}

export async function authRequest() {
    const body = { nome: 'LuizTools', idade: 35, uf: 'RS' };
    const response = await axios({
        method: 'POST',
        url: `${API_URL}/cadastro`,
        data: body,
        //headers: { 'Authorization': "123" }
    })
    return response.data;
}