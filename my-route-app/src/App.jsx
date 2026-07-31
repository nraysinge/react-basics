import React, { useState } from 'react'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Fashon from './Pages/Fashon'
import Mobile from './Pages/Mobile'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Navebar from './Componants/Navebar'
import Dashboard from './Pages/Dashboard'
import Login2 from './Pages/Login2'
import ProtectedRoute from '../ProtectedRoute'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'
import Massages from './Pages/Massages'

const App = () => {

  const [acceptLogin, SetAccetpLogin] = useState(null)

  const userData = localStorage.getItem('usr')

  const navigateMe = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('usr')
    navigateMe('/login2')
  }

  return (
    <div>
      <center>
        <h1>Welcome router app</h1>
        <Navebar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/mobile' element={<Mobile />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/home' element={<Home />} />
          <Route path='/fashon' element={<Fashon />} />
          <Route path='/login2' element={<Login2 />} />
          {/* <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} /> */}

          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/massages' element={<Massages />} />
          </Route>
          {/* <Route path='*' element={<h1>Page not found</h1>} /> */}
        </Routes>

        {userData && (<>  <button onClick={handleLogout}>  Logout </button><br /><br /> </>)}
      </center>
    </div>
  )
}

export default App
