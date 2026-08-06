import axios from 'axios'

// The Vite proxy keeps API calls on the same address as the app, including phones on Wi-Fi.
const api = axios.create({ baseURL: '/api' })

export const getUsers = () => api.get('/users')
export const createUser = (user) => api.post('/users', user)
export const getEmployees = () => api.get('/employees')
export const createEmployee = (employee) => api.post('/employees', employee)
export const updateEmployee = (id, employee) => api.put(`/employees/${id}`, employee)
export const deleteEmployee = (id) => api.delete(`/employees/${id}`)

export default api
