import axios from 'axios';

const axiosAll = axios.create({
    baseURL: 'http://605f-115-79-210-160.ngrok.io/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default axiosAll;