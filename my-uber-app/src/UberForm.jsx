import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UberForm = ({added,uEdit}) => {

    const [form, setForm] = useState({name:'', pic:'',drop:''})

    const handleChange = async (e)  =>{
        const{name, value} = e.target
        setForm({...form,[name]:value})
    } 

    const handleSubmit = async (e) => {
        e.preventDefault();
          if(uEdit){
            await axios.put(`http://localhost:3000/ubers/${uEdit.id}`,form)
          }
          else{
              await axios.post (`http://localhost:3000/ubers`,form)
          }
            added()
            setForm({name:'', pic:'',drop:''})
    }

    useEffect(()=>{
        if(uEdit){
            setForm(uEdit)
        }
    },[uEdit])

  return (
    <div>
      <h2>Uber Form</h2>
      <form onSubmit={handleSubmit}>
        Name: <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br/><br/>
        pic: <input type="text" name='pic' value={form.pic} onChange={handleChange} required /><br/><br/>
        drop: <input type="text" name='drop' value={form.drop} onChange={handleChange} required /><br/><br/>
        <button type='submit'>Add Ube</button>
      </form>
    </div>
  )
}

export default UberForm
