import axios from 'axios';

const api = axios.create({
    baseURL: 'http://f2ea5c57fe4f.ngrok.io'
});

export default api;