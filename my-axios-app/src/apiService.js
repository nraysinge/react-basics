import axios from "axios";

export const showAllEmployees = () => axios.get(`http://localhost:8080/employess`)

export const addEmployees = (emp) => axios.post(`http://localhost:8080/employess`,emp)

export const deleteEmployees = (id) => axios.deltee(`http://localhost:8080/employess${id}`,)

export const updateEmployees = (id, emp) => axios.put(`http://localhost:8080/employess${id}`,emp)

