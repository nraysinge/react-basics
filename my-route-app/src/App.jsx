import React from 'react'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Fashon from './Pages/Fashon'
import Mobile from './Pages/Mobile'
import { Route, Routes } from 'react-router-dom'
import Navebar from './Componants/Navebar'

const App = () => {
  return (
    <div>
      <center>
        <h1>Welcome router app</h1>
        <Navebar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kids' element={<Kids />} />
          <Route path='/mobile' element={<Mobile />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/fashon' element={<Fashon />} />
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </center>
    </div>
  )
}

export default App
