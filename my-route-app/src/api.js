import axios from "axios";

export const BASE_URL_LOGIN = import.meta.env.VITE_BASE_URL_LOGIN

export const loginApi = axios.create ({
    baseURL : BASE_URL_LOGIN
})