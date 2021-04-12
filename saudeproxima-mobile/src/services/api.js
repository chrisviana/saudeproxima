import axios from 'axios';

const api = axios.create({
    baseURL: 'http://832ea2856726.ngrok.io'
});

export default api;