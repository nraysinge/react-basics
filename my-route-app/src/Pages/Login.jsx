import React, { useEffect, useState } from 'react'
import { loginApi } from '../api'

const Login = () => {
  const [form, setForm] = useState({email:'',password:''})
  const [list, setList] = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const loaddata = async () =>{
    const {data} = await loginApi.get('/users')
    setList(data)
  }

  useEffect(()=>{
    loaddata();
  },[])

  const handleChange = (e) => {
    const {name,value} = e.target
    setForm({...form,[name]: value})
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = list.find((user)=> user.email === form.email)

    if(!userExists){
      alert('User does not exist')
    }
    else if(userExists.password !== form.password){
      alert('incorrect password')
    }
    else {
      setIsLoggedIn(true) // Update state to render success UI
    }
  }

  // Conditional rendering based on login status
  if (isLoggedIn) {
    return (
      <div>
        <h2>Welcome, {form.email}! You are logged in.</h2>
      </div>
    )
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      Enter email : <input type="email" name='email' value={form.email} onChange={handleChange} required /> <br/><br/>
      Enter Password : <input type="password" name='password' value={form.password} onChange={handleChange} required/><br/><br/>
      <button type='submit'>Login</button>
    </form>
    </div>
  )
}

export default Login
