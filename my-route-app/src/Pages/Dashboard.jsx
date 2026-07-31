import React from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    
    // const navigateMe = useNavigate() 

    // const handleLogout = () =>{
    //     localStorage.removeItem('usr')
    //     navigateMe('/login2')
    // }
  return (
    <div>
      <h1>Welcome To Dashboard : {localStorage.getItem('usr').toUpperCase()}</h1>
      {/* <button onClick={handleLogout}>Logout</button> <br/><br/> */}
    </div>
  )
}

export default Dashboard
