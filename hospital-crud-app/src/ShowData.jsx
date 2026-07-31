import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowData = ({handleUpdate, refresh, patients}) => {
    const [list, setList] = useState([])
      

    const loadData = async () => {
        const { data } = await axios.get(`http://localhost:3000/Patient`)
        setList(data)
    }

    useEffect(() => {
        loadData()
    }, [refresh])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:3000/Patient/${id}`,)
        loadData()
    }
      return (
        <div>
            <table border='2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Docotor Name</th>
                        <th>Department</th>
                        <th>Mobile No</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(patients ?? list).map((h) => (
                        <tr key={h.id}>
                            <td>{h.name}</td>
                            <td>{h.age}</td>
                            <td>{h.gender}</td>
                            <td>{h.drname}</td>
                            <td>{h.department}</td>
                            <td>{h.mobileno}</td>
                            <td>{h.email}</td>
                            <td>{h.status}</td>
                            <td><button onClick={() => handleDelete(h.id)}>Delete</button>
                                <button onClick={() => handleUpdate(h)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>


           </div>
    )
}

export default ShowData
