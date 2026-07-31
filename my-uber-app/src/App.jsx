import React, { useState } from 'react'
import ShowUbers from './ShowUbers'
import UberForm from './UberForm'

const App = () => {

  const [ref, setRef] = useState(0)
  const [edit, setEdit] = useState(null)

  return (
    <div>
      <center>
        <h1>Uber App...!</h1>
        <UberForm added={()=> {setRef(ref + 1), setEdit(null)}} aEdit={edit}/>

        <ShowUbers refresh={ref} handleUpdate={(e) => setEdit(e)} />
      </center>
    </div>
  )
}

export default App
