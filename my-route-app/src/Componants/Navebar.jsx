import React from 'react'
import { NavLink } from 'react-router-dom'

const Navebar = () => {
  const isLoggedIn = localStorage.getItem('usr');
  
  return (
    <div>
      <nav>
            <NavLink to='/'>Home</NavLink> {' | '}
            <NavLink to='dashboard'>Dashboard</NavLink> {' | '}
            {/* <NavLink to='login'>Login</NavLink> {' | '} */}
            <NavLink to='kids'>Kids</NavLink> {' | '}
            <NavLink to='mobile'>Mobile</NavLink> {' | '}
            <NavLink to='fashon'>Fashon</NavLink> {' | '}
            <NavLink to='massages'>Massages</NavLink>{' | '}
            <NavLink to='profile'>Profile</NavLink>{' | '}
            <NavLink to='settings'>Settings</NavLink>{' | '}
           <NavLink to='login2'>Login2</NavLink> {' | '}
        </nav>

      </div>
  )
}

export default Navebar
