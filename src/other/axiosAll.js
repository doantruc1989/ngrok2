import axios from 'axios';

const axiosAll = axios.create({
    baseURL: 'https://ce1b-103-173-255-97.ap.ngrok.io/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default axiosAll;