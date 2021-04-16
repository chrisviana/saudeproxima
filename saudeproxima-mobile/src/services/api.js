import axios from 'axios';

const api = axios.create({
    baseURL: 'http://6fd5d1a6489b.ngrok.io'
});

export default api;