import axios from 'axios';

const token = localStorage.hasOwnProperty('user') ? (JSON.parse(localStorage.getItem("user"))).access_token : '';
const instance = axios.create({
    baseURL: 'http://605f-115-79-210-160.ngrok.io/',
    headers: { 'Authorization': 'Bearer ' + token },
});

export default instance;