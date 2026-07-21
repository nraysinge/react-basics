import './App.css'
import React, { useState } from 'react'
import ShowData from './ShowData'
import EmployeeForm from './EmployeeForm'

const App = () => {

  const [allemployee, setAllemployee]=useState([])
  const recivedEmp = (emp) => {
    console.log("emp in app : ", emp)
    setAllemployee([...allemployee,emp])
  }
  return (
    <div>
      <center>
      <h1>Welcome to my-props-assignment</h1>
      <ShowData allemps={allemployee}/>
      <EmployeeForm addEmp={recivedEmp}/>
      </center>
    </div>
  )
}

export default App
