import axios from 'axios';

const api = axios.create({
    baseURL: 'http://ab8a5dad71bc.ngrok.io'
});

export default api;