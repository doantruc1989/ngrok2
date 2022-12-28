import axios from 'axios';

const axiosAll = axios.create({
    baseURL: 'http://103.173.255.97/',
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true
});

export default axiosAll;