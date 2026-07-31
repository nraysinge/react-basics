import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddData = ({edit,addData}) => {
const [form, setForm] = useState({ name: '', age: '', gender: '',drname:'',department:'',mobileno:'',email:'',status:'' })

     const handleChange = async (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    useEffect(()=> {
        if(edit){
            setForm(edit)
        }
    },[edit] )


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (edit) {
            await axios.put(`http://localhost:3000/Patient/${edit.id}`,form)
        } else {
            await axios.post('http://localhost:3000/Patient',form)
        }
       
        setForm({ name: '', age: '', gender: '',drname:'',department:'',mobileno:'',email:'',status:''  })
         addData()
    }

  return (
    <div>
       <h2>{edit ? "Patient Update Form" : "Patient Add Form"}</h2>
            <form onSubmit={handleSubmit}>
                PatientName: <input type="text" name='name' value={form.name} onChange={handleChange} required /><br /><br />
                Age: <input type="text" name='age' value={form.age} onChange={handleChange} required /><br /><br />
                Gender: <input type="text" name='gender' value={form.gender} onChange={handleChange} required /><br /><br />
                Doctor Name: <input type="text" name='drname' value={form.drname} onChange={handleChange} required /><br /><br />
                Department: <input type="text" name='department' value={form.department} onChange={handleChange} required /><br /><br />
                Mobile No.: <input type="text" name='mobileno' value={form.mobileno} onChange={handleChange} required /><br /><br />
                Email: <input type="text" name='email' value={form.email} onChange={handleChange} required /><br /><br />
                Status: <input type="text" name='status' value={form.status} onChange={handleChange} required /><br /><br />
                <button type='submit'>{edit ? "Update Patient" : "Add Patient"}</button>
            </form>
        </div>
  )
}

export default AddData
