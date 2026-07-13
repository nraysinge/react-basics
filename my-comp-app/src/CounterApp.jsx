import React, { useState } from 'react'

const CounterApp = () => {

    let num = 0;
    
    let name = "Mayur"

    let[count, setCount] = useState(0);

    const plus = () => {
        num++;
        setCount(count + 1);
        console.log("Count =",count);

    }

    const minus = () => {

    if(count <=0){
       alert("Count is less than 0");
    }
    else{
        num--;
        setCount(count - 1);
        console.log("Count =",count);
    }
    }


  return (
    <div>
        
      <h1>Counter App...{name}</h1>

      <button onClick={plus}>
            Incress 
        </button>
    
        <button onClick={minus}>
            Decrease 
        </button>

        <button onClick={() => setCount(0)}>
            reset 
        </button>

        <h2>Num = {num}</h2>
        <h2>Count = {count}</h2>
        
    </div>
  )
}

export default CounterApp
