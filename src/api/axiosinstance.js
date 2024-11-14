import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 10000, // 10 seconds timeout for any request
    // baseURL: 'https://dog.ceo/api', if needed ! 
});

axiosInstance.interceptors.request.use(
    (config) => {
        // const access_token = localStorage.getItem('access_token');

        // if (access_token) {
        //     config.headers.Authorization = `Bearer ${access_token}`;
        // }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;