import React, { useState } from 'react'

const Event = () => {
    const handelClick = () => {
        console.log("click me")
    }

    let [uname, setUname] = useState('')
     const handleUsername = (tag) => {
           setUname(tag.target.value)

  }
    



    return (
        <div>
            <h3> Welcome To Event JSX</h3>

            <button onClick={handelClick}>Click me</button>

            Enter UserName : <input type='text' name='uname' value={uname} onChange={handleUsername} />
            <button onClick={()=>console.log("uname:- ",uname)}>save</button>
            <button onClick={()=>setUname=('')}>clear</button>


        </div>
    )
}

export default Event
