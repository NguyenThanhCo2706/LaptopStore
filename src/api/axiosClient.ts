import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ResponseGenerator from "../interfaces/responseGenerator";



const axiosClient = axios.create({
    // headers: {
    //     'Content-Type': 'application/json'
    // }
});


axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosClient.interceptors.response.use(function (response: ResponseGenerator) {
    return response;
}, function (error) {
    console.log(error.status);
    return Promise.reject(error);
});

export default axiosClient