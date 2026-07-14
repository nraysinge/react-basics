import React from 'react'

const ShowData = ({allemps}) => {

  return (
    <div>
      <h2>All Data</h2>

      <table border='2'>
        <thead>
            <tr>
                <th>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>Roal</td>
                    <td>SALARY</td>
                    <td>Action</td>
               </th>
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
