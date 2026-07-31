import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = ({acceptUser}) => {
  const [list, setList] = useState([])
  const [form, setForm] = useState({name:'',email:'',mobile:'',role:'',password:''})
  const [edit, setEdit] = useState(null)

  const storedUser = JSON.parse(localStorage.getItem('usr') || 'null')
  const isAdmin = acceptUser === 'admin' || storedUser?.role === 'admin'

  const loadData = async (e) => {
    const {data} = await axios.get(`http://localhost:3000/users`)
    setList(data)
  }

  useEffect(()=>{
    loadData()
  },[])

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/users/${id}`)
    await loadData()
  }

  const handleChange = async (e) => {
    const {name, value} = e.target
    setForm({...form,[name]:value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      mobile: form.mobile || form.phone || '',
      phone: form.mobile || form.phone || ''
    }

    if (edit) {
      await axios.put(`http://localhost:3000/users/${edit.id}`, payload)
    } else {
      await axios.post(`http://localhost:3000/users`, payload)
    }

    await loadData()
    setEdit(null)
    setForm({name:'',email:'',mobile:'',role:'',password:''})
  }

  const handleUpdate = (obj) => {
    setEdit(obj)
    setForm({
      ...obj,
      mobile: obj.mobile || obj.phone || '',
      phone: obj.mobile || obj.phone || ''
    })
  }
  return (
    <div>
      <h2>Dashboard...!</h2>
      <h2>Employee Table</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th>ROLE</th>
                        { isAdmin && (<>
                        <th>PASSWORD</th>
                        <th>ACTION</th>
                        </>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {list.map((e) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile || e.phone}</td>
                            <td>{e.role}</td>
                                {
                                  isAdmin && ( <> <td>{e.password}</td>
                            
                            <td><button onClick={() => handleDelete(e.id)}>Delete</button>
                                <button onClick={() => handleUpdate(e)}>Update</button>
                            </td>
                            
                            </>)}
                        
                        </tr>
                    ))}
                </tbody>
            </table>


            <h2>{edit ? "Emp Update Form":"Emp Add Form"}</h2>
            <form onSubmit={handleSubmit}>
                Name: <input type="text" name='name' value={form.name} onChange={handleChange} required /><br /><br />
                email: <input type="text" name='email' value={form.email} onChange={handleChange} required /><br /><br />
                Phone: <input type="text" name='mobile' value={form.mobile || form.phone || ''} onChange={handleChange} required /><br /><br />
                Role: <input type="text" name='role' value={form.role} onChange={handleChange} required /><br /><br />
                Password: <input type="text" name='password' value={form.password} onChange={handleChange} required /><br /><br />
                <button type='submit'>{edit ? "Update Emp":"Emp Add"}</button>
            </form>


    </div>
  )
}

export default Dashboard
