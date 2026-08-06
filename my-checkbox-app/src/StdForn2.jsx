import React, { useState } from 'react'

const StdForn2 = () => {

    const [form, setForm] = useState(
        {
            roll: '',
            name: '',
            std: '',
            marks: '',
            grade: '',
            address: '',
            house: '',
            games: []
        })

    let fields = [
        "roll",
        "name",
        "std",
        "marks",
        "grade",
        "address",
        "house",
    ]

    let games = [
        "Cricket",
        "Football",
        "Tennis",
        "Chess",
        "Carrrom",
        "Volleyball",
        "Archery",
        "Badminton",
        "Ludo",
        "Table Tennis",
        "Hockey",
        "Kho Kho",
        "Kabaddi",
        "Laghori",
        "Gilli Danda",
        "Lapa Chhapi",

    ]

    const handleChange = (e) => {

        const { type , name , value, checked } = e.target;

        if (name != '') {
            setForm({ ...form, [name]: value })
            return;
        }

        if (checked) {
            setForm({ ...form, games: [...form.games, value] })
            return;
        } else {
            setForm({ ...form, games: [...form.games.filter((g) => g != value)] })
            return;
        }

           //  setForm({...form , [name] : type == 'text' ? value : '', games : checked ? [...form.games , value] : [...form.games.filter((g)=>g!=value)] })
    }

    // const handleCheckbox = (e) => {

    //     const { value, checked } = e.target;

    //     if (checked) {
    //         setForm({ ...form, games: [...form.games, value] })
    //     } else {
    //         setForm({ ...form, games: [...form.games.filter((g) => g != value)] })

    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form)
        setForm({
            roll: '',
            name: '',
            std: '',
            marks: '',
            grade: '',
            address: '',
            house: '',
            games: []
        })
    }
    return (
        <div>


            <h2>Student Form</h2>

            <form onSubmit={handleSubmit}>

                {
                    fields.map((f) => (
                        <div key={f}>

                            {f} : <input type="text" name={f} value={form[f]} onChange={handleChange} required /> <br /><br />

                        </div>
                    ))
                }
                Games : <br />

                {
                    games.map((g) => (
                        <div key={g}>
                            <input type="checkbox" value={g} onChange={handleChange} checked={form.games.includes(g)} /> {g} <br />
                        </div>
                    ))
                }

                <br />
                <button type='submit'>
                    Add Student
                </button>
            </form>
    </div>
  )
}

export default StdForn2
