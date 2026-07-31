import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Search = ({onSearch}) => {
    const [form, setForm] = useState({ search: '' })
    const [patients, setPatients] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

   const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await axios.get("http://localhost:3000/Patient", {
    params: { "name:contains": form.search },
  });

  onSearch(response.data);
  };

    return (
        <div>
            <h2>Search Box</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" value={form.search} onChange={handleChange} required /> {'   '}
                <button type='submit'>Search</button>
            </form>

            {/* <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>{patient.name}{patient.status}{patient.mobile}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default Search
