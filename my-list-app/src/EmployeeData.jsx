import React, { useState } from 'react'

const EmployeeData = () => {

    let [allemployee, setAllEmployee] = useState([])

    let [employee, setEmployee] = useState({ id: '', name: '', role: '', salary: '' })

    let [up, setUp] = useState(false)

    const handleChange = (e) => {
        let { name, value } = e.target
        setEmployee({ ...employee, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = allemployee.filter((emp) => emp.id !== employee.id)
        setAllEmployee([...newList, employee])
        setUp(false)
        setEmployee({ id: '', name: '', role: '', salary: '' })
    }

    const handleDelete = (id) => {
        console.log('id :- ', id)
        const newList = allemployee.filter((emp) => emp.id !== id)
        setAllEmployee(newList)
    }

    const handleUpdate = (emp) => {
        console.log('emplo:- ', emp)
        setUp(true)
        setEmployee(emp)

    }

    return (
        <div>
            <h2>{up ? "Update Employee Form" : "Employee Form"}</h2>
            <form onSubmit={handleSubmit}>
                Enter Id : <input type='text' name='id' value={employee.id} onChange={handleChange} required /> <br /><br />
                Enter Name : <input type='text' name='name' value={employee.name} onChange={handleChange} required /><br /><br />
                Enter Role : <input type='text' name='role' value={employee.role} onChange={handleChange} required /><br /><br />
                Enter Salary : <input type='text' name='salary' value={employee.salary} onChange={handleChange} required /><br /><br />
                <button type='submit'>{up ? "Update Employee" : "Add Employee"}</button>
            </form>

            <h2>Employee Table</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {allemployee.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.role}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={() => handleUpdate(emp)}>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button onClick={() => handleDelete(emp.id)}>
                                    Delete
                                </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeData
