import React, { useState } from 'react'

const StudentForm = () => {

    const [form, setForm] = useState({ name: '', games: [] })

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
        setForm({ name: '', games: [] })
    }

    const handleCheckbox = (e) => {

        const { value, checked } = e.target
        const games = Array.isArray(form.games) ? form.games : []
        if (checked) {
            setForm({ ...form, games: [...games, value] })
        } else {
            setForm({ ...form, games: [...games.filter((g) => g != value)] })
        }
    }

   return (
        <div>
            <h2>CheckBox Form</h2>
            <form onSubmit={handleSubmit}>
                Name : <input type="text" name='name' value={form.name} onChange={handleChange} required /> <br /><br />
                Games :<br/>
                <input type="checkbox"  value="cricket" onChange={handleCheckbox} checked={form.games.includes("cricket")} /> Cricket <br /><br />
                <input type="checkbox"  value="football" onChange={handleCheckbox} checked={form.games.includes("football")} /> Football <br /><br />
                <input type="checkbox"  value="basketball" onChange={handleCheckbox} checked={form.games.includes("basketball")} /> BasketBall <br /><br />
                <button type='submit'>Add Data</button>
            </form>
        </div>
    )
}

export default StudentForm
