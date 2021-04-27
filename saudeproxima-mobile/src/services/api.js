import axios from 'axios';

const api = axios.create({
    baseURL: 'http://b3a762b3f05d.ngrok.io'
});

export default api;