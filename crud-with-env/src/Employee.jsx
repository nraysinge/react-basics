import React, { useEffect, useState } from 'react'
import { empApi } from './apiServices'

const Employee = () => {

    const [list, setList] = useState([])

    const loaddata = async () => {
        const { data } = await empApi.get(`/employees`)
        setList(data)
    }

    const [form, setForm] = useState({name:'', role:'', salary:''})

    const [edit, setEdit] = useState(null)

    useEffect(() => {
        loaddata();
    }, [])

    const handleChange = async (e)  => {
        const {name,value} = e.target 
        setForm({...form,[name]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(edit){
          await empApi.put(`/employees/${edit.id}`,form)
            
        }
        else{
            await empApi.post(`/employees`,form)
        }

        loaddata();
        setForm({name:'', role:'', salary:''})
        setEdit(null)
    }

    const handleDelete = async (id) => {
        await empApi.delete(`/employees/${id}`)
        loaddata();
    }

    const handleUpdate = async (obj) => {
        setForm(obj)
        setEdit(obj)
    }

    return (
        <div>
            <h2>{edit ? "Update Form" : "Employee Form"}</h2>
            <form onSubmit={handleSubmit}>
            Enter Name: <input type="text" name='name' value={form.name} onChange={ handleChange} required /><br/><br/>
            Enter Role: <input type="text" name='role' value={form.role} onChange={handleChange} required /><br/><br/>
            Enter Salary: <input type="text" name='salary' value={form.salary} onChange={handleChange} required /><br/><br/>
            <button type='submit'>{edit ? "Update Emp" : "Add Employee"}</button>
            </form>
            <h2>Employee Table</h2>
            <table border='2'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ROLE</th>
                        <th>SALARY</th>
                        <th>DELETE</th>
                        <th>UPDATE</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((e) => (
                        <tr key={e.id}>
                            <td>{e.name}</td>
                            <td>{e.role}</td>
                            <td>{e.salary}</td>
                            <td><button onClick={()=>handleDelete (e.id)}>Delete</button></td>
                            <td><button onClick={()=>handleUpdate (e)}>Update</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employee
