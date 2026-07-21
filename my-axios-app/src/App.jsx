import './App.css'
import React, {useState, useEffect} from 'react'
import { showAllEmployees, deleteEmployees, updateEmployees } from './apiService'
import EmployeeForm from './EmployeeForm'
import EmployeeTable from './EmployeeTable'

const App = () => {

  const [allemps, setAllemps] = useState([])

    const loadEmployees = async () => {
        const { data } = await showAllEmployees();
        setAllemps(data)
    }

    useEffect(() => {
        loadEmployees();
    }, [])

    const onDelete = async (id) =>{
      await deleteEmployees(id)
      setAllemps(allemps.filter((emp)=> emp.id !== id)) 
    }

    const onUpdate = async (id, updateEmp) => {
      const response = await updateEmployees(id, updateEmp)
      setAllemps(allemps.map((emp)=>emp.id === id ? response.data : emp))
    }

  // const [allemps, setAllemps] = useState({name:'',role:'',salary:''})

  
  return (
    <div>
      <center>
        <h1>Welcome to axios app</h1>
        <EmployeeForm setAllemps={setAllemps}/>
        <EmployeeTable allemps={allemps}  />
      </center>
    </div>
  )
}

export default App
