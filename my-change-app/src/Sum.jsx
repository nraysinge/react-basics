import React, { useState } from 'react'

function Sum () {

    let [num1, setNum1] = useState(0)
    let [num2, setNum2] = useState(0)
    let [sum, setSum] = useState(0)

   return (
    <div>
      <h2>Hello From Sum Componant</h2>

     Num1 = <input type='text' onChange={(e)=>setNum1(Number (e.target.value))}></input><br/><br/>
     Num2 = <input type='text' onChange={(e)=>setNum2(Number (e.target.value))}></input><br/><br/>

     <button onClick={()=>setSum(num1+num2)}>Calculate Sum</button>
     
    <h3>Sum={sum}</h3>

    </div>
    )
}

export default Sum
