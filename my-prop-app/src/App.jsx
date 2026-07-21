import React, { useState } from 'react'
import Sum from './Sum'
import Diff from './Diff'
import Multi from './Multi'

const App = () => {

  const [a,SetA] = useState(0)
  const [b,SetB] = useState(0)
  // let a = 5;
  // let b = 6;
  function multiopt(){
    return a*b
  }
  return (
    <div>
      <center>
        <h1>Welcome to prop</h1>
        a = <input type="text" name={a} onChange={(e)=> SetA(Number(e.target.value))} /> <br/><br/>
        a = <input type="text" name={b} onChange={(e)=> SetB(Number(e.target.value))} /><br/><br/>

        <Sum x={a} y={b} />
        <Diff p={a} q={b}/>
        <Multi multi={multiopt}/>
      </center>
    </div>
  )
}

export default App
