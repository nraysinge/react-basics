import React from 'react'
import { NavLink } from 'react-router-dom'

const Navebar = () => {
  return (
    <div>
      <nav>
            <NavLink to='/'>Home</NavLink> {' | '}
            <NavLink to='login'>Login</NavLink> {' | '}
            <NavLink to='kids'>Kids</NavLink> {' | '}
            <NavLink to='mobile'>Mobile</NavLink> {' | '}
            <NavLink to='fashon'>Fashon</NavLink> {' | '}
        </nav>
    </div>
  )
}

export default Navebar
