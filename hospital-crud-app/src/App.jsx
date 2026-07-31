import React, { useState } from 'react'
import ShowData from './ShowData'
import AddData from './AddData'
import Search from './Search'


const App = () => {

  const [ref, setRef] = useState(0)
  const [edit, setEdit] = useState(null)
  const [onSearch, setOnSearch] = useState(null)

  return (
    <div>
      <center>
        <h1>Hospital Patient CRUD Application...!</h1>
        <ShowData refresh={ref} patients={onSearch} handleUpdate={(e)=>setEdit(e)}/>
          <AddData addData={()=>{setRef(ref+1),(setEdit(null))}} edit={edit}/>

            <Search onSearch={setOnSearch}/>
      </center>

    </div>
  )
}

export default App
