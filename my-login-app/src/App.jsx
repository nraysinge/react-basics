import React, { useState } from 'react'
import Login from './Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './ProtectedRoute';


const getStoredUserRole = () => {
    const storedUser = JSON.parse(localStorage.getItem('usr') || 'null')
    return storedUser?.role || null
}

const App = () => {
  const [user, setUser] = useState(getStoredUserRole)

  return (
    <div>
      <center>
        <h1>Login App</h1>
        <Routes>
          <Route path='/' element={<Login userLogged={(e) => setUser(e)} />} />
          <Route element={<ProtectedRoute />} >
          <Route path='/dashboard' element={user ? <Dashboard acceptUser={user} /> : <Navigate to='/' replace />}/>
         </Route>
        </Routes>
      </center>
    </div>
  )
}

export default App
