import axios from "axios";

export const BASE_URL = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diandrey/`

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}login`, body);
    return data;
}

export const Signup = async (body) => {
    const { data } = await axios.post(`${BASE_URL}signup`, body);
    return data;
}

export const validateEmail = email => /[a-zA-Z0-9]+@[a-z]{3}[.a-z]?/.test(email);
export const validatePassword = password => /.{6,}/.test(password);
export const validateName = name => /.{2,}/.test(name);