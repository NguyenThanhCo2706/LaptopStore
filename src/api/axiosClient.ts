import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ResponseGenerator from "../interfaces/responseGenerator";



const axiosClient = axios.create({
    baseURL: "http://localhost:3001"
});


axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    return config;
}, function (error) {
    return Promise.reject(error);
});


axiosClient.interceptors.response.use(function (response: ResponseGenerator) {
    return response.data;
}, function (error) {
    return Promise.reject(error);
});

export default axiosClient