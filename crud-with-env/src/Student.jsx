import React, { useEffect, useState } from 'react'
import { stdApi } from './apiServices'

const Student = () => {

    const [list, setList] = useState([])
    const [form, setForm] = useState({ name: '', standard: '', marks: '' })
    const [edit, setEdit] = useState(null)

    const loaddata = async () => {
        const { data } = await stdApi.get('/students')
        setList(data)
    }

    useEffect(() => {
        loaddata();
    })


    const handleChange = async (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = async (e) => {
         e.preventDefault();
        if (edit) {
            await stdApi.put(`/students/${edit.id}`, form)
        }
        else {
            await stdApi.post(`/students/`, form)
        }
        loaddata();
        setForm({ name: '', standard: '', marks: '' })
        setEdit(null)
    }

    const handleDelete = async (id) => {
        await stdApi.delete(`/students/${id}`)
        loaddata();
    }

    const handleUpdate = (obj) => {
        setEdit(obj)
        setForm(obj)
    }

    return (
        <div>
            <div>
                <h2>{edit ? 'Update Form':'Student Form'}</h2>
                <form onSubmit={handleSubmit}>
                    Enter name: <input type="text" name='name' value={form.name} onChange={handleChange} required /><br /><br />
                    Enter standard: <input type="text" name='standard' value={form.standard} onChange={handleChange} required /><br /><br />
                    Enter marks: <input type="text" name='marks' value={form.marks} onChange={handleChange} required /><br /><br />
                    <button type='submit'>{edit ? 'Update':'Student Add'}</button>
                </form>
                <h2>Student Table</h2>
                <table border='2'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>STANDARD</th>
                            <th>MARLS</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((e) => (
                            <tr key={e.id}>
                                <td>{e.name}</td>
                                <td>{e.standard}</td>
                                <td>{e.marks}</td>
                                <td>
                                    <button onClick={() => handleDelete(e.id)}>Delete</button></td>
                                <td>  <button onClick={() => handleUpdate(e)}>Update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Student