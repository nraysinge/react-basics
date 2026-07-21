import axios from "axios";


export const BASE_URL_EMPLOYEES = import.meta.env.VITE_BASE_URL_EMPLOYEES
export const BASE_URL_STUDENTS = import.meta.env.VITE_BASE_URL_STUDENTS

export const empApi = axios.create({
    baseURL: BASE_URL_EMPLOYEES,
});


export const stdApi = axios.create({
    baseURL: BASE_URL_STUDENTS,
});