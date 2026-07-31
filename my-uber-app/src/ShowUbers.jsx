import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ShowUbers = ({refresh, handleUpdate}) => {
    
    const[list, setlist] = useState([])

    const loaddata = async (e) => {
        const{data} = await axios.get(`http://localhost:3000/ubers`)
        setlist(data)
    }

    useEffect(()=>{
        loaddata();
    },[refresh])

    const handleDelete = async (id) =>{
        await axios.delete(`http://localhost:3000/ubers/${id}`)
        loaddata();
    }

  return (
    <div>
      <h2>Uber Table</h2>
      <table border="2">
        <thead>
            <tr>
            <th>Name</th>
            <th>Picup</th>
            <th>Drop</th>
            <th>Delete</th>
            <th>Update</th>
        </tr>
        </thead>
        <tbody>
            {list.map((u)=>(
                <tr key={u.id}>
                    <td>{u.name}</td>
                    <td>{u.pic}</td>
                    <td>{u.drop}</td>
                    <td>
                        <button onClick={()=>handleDelete(u.id)}>Delete</button>
                    </td>
                    <td>
                        <button onClick={()=>handleUpdate(u)}>Update</button>
                    </td>
                </tr>
            ))}
          </tbody>
      </table>
    </div>
  )
}

export default ShowUbers
