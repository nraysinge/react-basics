import React, { useState } from 'react'

function Tasks() {

    let [name1, setName1] = useState('')

    const handleChange1 = (e) => {
        setName1(e.target.value)
    }


    let [name2, setName2] = useState('')
    let [course, setCourse] = useState('')

    const handleChange2 = (e) => {
        setName2(e.target.value)
    }
    const handleChange3 = (e) => {
        setCourse(e.target.value)
    }

    let [text, setText] = useState('')

    const handleChange4 = (e) => {
        setText(e.target.value)
    }

    let [color, setColor] = useState('');

    const handleChange5 = (e) => {
        setColor(e.target.value);
    };
    return (
        <div>
            <center>
                <h3>Task 1: Live Name Preview</h3>
                Enter Name :- <input type='text' onChange={handleChange1} />
                <h3>Hello {name1}</h3>
                <h2>-----------------------------------------------------------------</h2>

                <h3>Task 2: Student Profile</h3>
                Enter Name :- <input type='text' onChange={handleChange2} /><br /> <br />
                Enter Course Name :- <input type='text' onChange={handleChange3} />
                <h3>Name: {name2}</h3>
                <h3>Course: {course}</h3>
                <h2>-----------------------------------------------------------------</h2>

                <h3>Task 3: Live Character Counter</h3>
                Type text to find lenght :- <textarea rows="1" cols="30" value={text} onChange={handleChange4} />
                <h3>Typed text :- {text}</h3>
                <h3>Characters :- {text.length}</h3>
                <h2>-----------------------------------------------------------------</h2>

                <h3>Task 4: Favorite Color Preview</h3>
                <input type="text" value={color} onChange={handleChange5}/>
                <div style={{ backgroundColor: color }}>
                    Preview Box
                </div>
                <h2>-----------------------------------------------------------------</h2>            </center>
        </div>
    )
}

export default Tasks
