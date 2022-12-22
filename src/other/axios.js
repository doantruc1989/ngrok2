import axios from 'axios';

const token = localStorage.hasOwnProperty('user') ? (JSON.parse(localStorage.getItem("user"))).access_token : '';
const instance = axios.create({
    baseURL: 'https://d3f0-115-79-210-160.ap.ngrok.io/',
    timeout: 1000,
    headers: { 'Authorization': 'Bearer ' + token },

});

export default instance;