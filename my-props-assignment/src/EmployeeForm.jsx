import React, { useState } from 'react'

const EmployeeForm = () => {

    const [emp, setEmp] = useState({id:'',name:'',roal:'',salary:''})

    const handelEmp = (e) =>{
        e.preventDefult()
        let {name,value}= e.target;

        setEmp
    }

  return (
    <div>
      <h2>Add Employee Form</h2>
      <form onsub>
        Enter Id : <input type='text' name='id' value={emp.id} onChange={handelEmp}/> <br/><br/>
        Enter Name : <input type='text' name='id' value={emp.name} onChange={handelEmp}/><br/><br/>
        Enter Roal : <input type='text' name='id' value={emp.roal} onChange={handelEmp}/><br/><br/>
        Enter Salary : <input type='text' name='id' value={emp.salary} onChange={handelEmp}/><br/><br/>
      </form>
      <button > Add Employee</button>
    </div>
  )
}

export default EmployeeForm