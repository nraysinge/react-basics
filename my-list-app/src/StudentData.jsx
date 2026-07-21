import React, { useState } from 'react'

const StudentData = () => {

    const [student, setStudent] = useState({roll:'',name:'',math:'',english:'',science:''}) // for store tp std data

    const [allstudent, setAllStudent] = useState([]) //
    
    const handleChange = (e) =>{
        let {name , value} = e.target
        setStudent({...student,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newList = allstudent.filter((emp) => emp.id !== employee.id)
        setAllStudent([...newList, student])
        setStudent({roll:'',name:'',math:'',english:'',science:''})
    }

  return (
    <div>
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        Enter Roll No. : <input type='text' name='roll' value={student.roll} onChange={handleChange}></input><br/><br/>
        Enter Name : <input type='text' name='name' value={student.name} onChange={handleChange}></input><br/><br/>
        Enter Math Mark : <input type='text' name='math' value={student.math} onChange={handleChange}></input><br/><br/>
        Enter English Mark : <input type='text' name='english' value={student.english} onChange={handleChange}></input><br/><br/>
        Enter Science Mark : <input type='text' name='science' value={student.science} onChange={handleChange}></input><br/><br/>
        <button type='submit'>Add Student</button>      
      </form>

    <h2>Student Table</h2>
      <table border={3}>
        <thead>
            <tr>
                <th>ROLL No.</th>
                <th>NAME</th>
                <th>MATH</th>
                <th>ENGLISH</th>
                <th>SIENCE</th>
                <th>Total</th>
            </tr>
        </thead>
        <tbody>
            {allstudent.map((std)=>
             <tr key={std.roll}>
                <td>{std.roll}</td>
                <td>{std.name}</td>
                <td>{std.math}</td>
                <td>{std.english}</td>
                <td>{std.science}</td>
                <td>{Number(std.math)+Number(std.english)+Number(std.science)}</td>
             </tr>
            
            )}
           
        </tbody>
      </table>
    </div>
  )
}

export default StudentData
