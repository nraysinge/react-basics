import React, { useState } from 'react'

const EmployeeForm = ({ addEmp }) => {

  const [emp, setEmp] = useState({ id: '', name: '', role: '', salary: '' })

  const handleChange = (e) => {

    const { name, value } = e.target
    setEmp({ ...emp, [name]: value })

  }

  const handleSubmit = (e) => {
    e.preventDefult()
    addEmp(emp)
    setEmp({ id: '', name: '', role: '', salary: '' })
    }

  return (
    <div>
      <h2>Add Employee Form</h2>
      <form onSubmit={handleSubmit}>
        Enter Id : <input type='text' name='id' value={emp.id} onChange={handleChange} /> <br /><br />
        Enter Name : <input type='text' name='name' value={emp.name} onChange={handleChange} /><br /><br />
        Enter Roal : <input type='text' name='roal' value={emp.role} onChange={handleChange} /><br /><br />
        Enter Salary : <input type='text' name='salary' value={emp.salary} onChange={handleChange} /><br /><br />
        <button type='submit'> Add Employee</button>
      </form>

    </div>
  )
}

export default EmployeeForm