import axios from 'axios';

const axiosAll = axios.create({
    baseURL: 'https://d3f0-115-79-210-160.ap.ngrok.io/',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});

export default axiosAll;