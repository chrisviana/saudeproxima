import axios from 'axios';

const api = axios.create({
    baseURL: 'http://9274822946a2.ngrok.io'
});

export default api;