import axios from 'axios';

const token = localStorage.hasOwnProperty('user') ? (JSON.parse(localStorage.getItem("user"))).access_token : '';
const instance = axios.create({
    baseURL: 'https://ce1b-103-173-255-97.ap.ngrok.io/',
    headers: { Authorization: `Bearer ${token}` },
});

export default instance;