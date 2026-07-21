import React from 'react'

const ShowData = ({allemps}) => {

  return (
    <div>
      <h2>All Data</h2>

      <table border='2'>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ROLE</th>
                <th>SALARY</th>
            </tr>
        </thead>
                
        <tbody>
            {allemps.map((emp)=>(
                    <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.roal}</td>
                        <td>{emp.salary}</td>
                    </tr>
                    ))
                }
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
