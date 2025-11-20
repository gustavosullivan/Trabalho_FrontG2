import axios from 'axios';


//Alterar após a API estar finalizada para mapear o o login
const API_URL = 'https://hollow-christan-trabalhodados-24104763.koyeb.app/';

//teste
export async function signIn(email, password) {
    try {
        const response = await axios.post(`${API_URL}/signin`, { email, password });
        return response.data;
    } catch (error) {
        if (error.response) {
            if (error.response.status === 400) {
                throw new Error('Requisição inválida.');
            }
            if (error.response.status === 401) {
                throw new Error('Usuário ou senha incorretos.');
            }
        }
        throw new Error('Erro ao autenticar.');
    }
}

export async function signUp(name, email, password) {
    try {
        const response = await axios.post(
            "https://hollow-christan-trabalhodados-24104763.koyeb.app/auth/signup",
            { name, email, password }
        );

        console.log(response);
        return response.data;

    } catch (error) {
        console.log("ERRO DA API:", error.response?.data);
        console.log("STATUS:", error.response?.status);

        if (error.response) {
            if (error.response.status === 400) {
                throw new Error(error.response?.data);
            }
            if (error.response.status === 409) {
                throw new Error(error.response?.data);
            }
        }

        throw new Error(error.response?.data);
    }
}
