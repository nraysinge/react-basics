import './App.css'
import React from 'react'
import EmployeeData from './EmployeeData'
import StudentData from './StudentData'

const App = () => {
  return (
    <div>
      <center>
      <h1>Welcome to my list app</h1>
      {/* ?<EmployeeData/> */}
      <StudentData/>
      </center>
    </div>
  )
}

export default App
