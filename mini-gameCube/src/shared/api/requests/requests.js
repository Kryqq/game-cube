import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api.lettobet.dev.bet4skill.com/api/',
    withCredentials: true,
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Content-Type': 'application/json',
        'access-control-allow-credentials': true,
        'credentials': 'include'
    }
});
export const fetchLogin = {
    userLogin(login, password) {
        return instance.post('client-login', { login, password });
    }
};
