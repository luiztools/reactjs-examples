import axios from "axios";

axios.interceptors.request.use(
    config => {
        config.headers.Authorization = "123";
        return config;
    },
    error => Promise.reject(error)
)

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && [401, 403].includes(error.response.status)) {
            console.error('Redirected to login by 4xx response!');
            window.location = '/';
        }
        else
            return Promise.reject(error);
    });

export default axios;