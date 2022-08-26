import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ResponseGenerator from "../interfaces/responseGenerator";



const axiosClient = axios.create({
    baseURL: "https://laptopstore-api.herokuapp.com"
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