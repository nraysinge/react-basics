import { addEmployees, } from './apiService'
import React, { useState } from 'react'
const EmployeeForm = ({setAllemps}) => {

    const [emp, setEmp] = useState({ name: '', role: '', salary: '' })
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        // let emp = { name: 'koli', role: 'tester', salary: 52000 }
        // addEmployees(emp).then((res) => {
        //     console.log("data add: ", res.data)
        // }).catch((arr) => { console.log("errar: ", arr) })

        const { data } = await addEmployees(emp);
        setAllemps((prevEmps) => [...prevEmps, data])
        setEmp({ name: '', role: '', salary: '' });
    }

    const handleChange = (e) => {
        const {name,value} = e.target;
            setEmp((prevEmp)=>({...prevEmp,[name]: value}))
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                Enter Name : <input type='text' name='name' value={emp.name} onChange={handleChange} required></input> <br/><br/>
                Enter Role : <input type='text' name='role' value={emp.role} onChange={handleChange} required></input> <br/><br/>
                Enter Salary : <input type='text' name='salary' value={emp.salary} onChange={handleChange} required></input> <br/><br/>
                <button type='submit'>Add Emp</button>
            </form>
        </div>
    )
}

export default EmployeeForm
