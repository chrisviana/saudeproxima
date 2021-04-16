import axios from 'axios';

const api = axios.create({
    baseURL: ' http://1855327a9dc3.ngrok.io'
});

export default api;