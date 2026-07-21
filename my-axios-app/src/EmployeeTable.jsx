import React from 'react'

const EmployeeTable = ({allemps, onUpdate, onDelete}) => {
    return (
        <div>
            <h2>Employee Table</h2>

              <table border='2'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>UPDATE</th>
                        <th>DELETE</th>
                    </tr>
                </thead>
                <tbody>
                    {allemps.map((emp) => (
                        <tr key={emp.id}>
                            <td>{emp.name}</td>
                            <td>{emp.role}</td>
                            <td>{emp.salary}</td>
                            <td>
                                <button onClick={()=> onUpdate(emp.id,emp)}>
                                Update
                                </button>
                            </td>
                            <td>
                                <button onClick={()=> onDelete(emp.id)}>
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

export default EmployeeTable
