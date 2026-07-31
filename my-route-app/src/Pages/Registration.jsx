import React, { useState } from 'react'

const Registration = () => {
    
    const [userlist, setUserList] = useState();


  return (
    <div>
      <form onSubmit='handelSubmit'>
        Enter Name: <input type="text"  />
      </form>
    </div>
  )
}

export default Registration
