import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ userLogged }) => {
    const [form, setForm] = useState({ email: '', password: '' })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        
            const { data } = await axios.get('http://localhost:3000/users')
            const userFound = data.find((u) => u.email === form.email || u.mobile === form.mobile)

            if (!userFound) {
                alert('User Not Found')
                return
            }

            if (String(userFound.password) !== String(form.password)) {
                alert('Incorrect Password')
                return
            }

            userLogged(userFound.role)
            localStorage.setItem('usr', JSON.stringify(userFound))
            navigate('/dashboard')
                
            setForm({ email: '', password: '' })
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Enter Mobile Or Email: <input type='text' name='email' value={form.email} onChange={handleChange} required /> <br /><br />
                Enter Password: <input type='password' name='password' value={form.password} onChange={handleChange} required /> <br /><br />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login
