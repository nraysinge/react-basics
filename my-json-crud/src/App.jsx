import React, { useState } from 'react'

const App = () => {

const [student, setStudent] = useState({name:'', email:'', phone:''})

const [addStudent, setAddStudent] = useState([])


const handleChange = (e) => {

  const {name,value} = e.target 

  setStudent({...student,[name]: value})
}

const handleSubmit = (e) => {

}

const loadStudent = async () => {
  const { data } = await showAllEmployees();
    setAllemps(data);
}

  return (
    <div>
      <center>
        <h2>Welcome in json Crud</h2>

        <h3>Student Form</h3>
        <form onSubmit={handleSubmit}>
          Enter Name:- <input type='text' name='name' value={student.name} onChange={handleChange} required></input>
          Enter Email:- <input type='text' name='email' value={student.email} onChange={handleChange} required></input>
          Enter Phone:- <input type='text' name='phone' value={student.phone} onChange={handleChange} required></input>
          <button type='submit'></button>
        </form>
        <h3> Student Table</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {student.map((e)=>
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.phone}</td>
            </tr>
            )}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App
