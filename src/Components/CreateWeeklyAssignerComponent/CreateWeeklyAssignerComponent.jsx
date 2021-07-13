import React, { useState } from 'react';
import './CreateWeeklyAssignerComponent.css';
import ListComponent from '../ListComponent/ListComponent';

const handleSubmit = ( e, names, setNames, input, SetInput) => {
    e.preventDefault()
   
    setNames([...names, input])
    SetInput('')
}


export default () => {
    const [names, setNames] = useState([])
    const [ input, setInput ] = useState('')

    return (
        <div>
            <form  className='FormContainer' onSubmit={(e) => handleSubmit(e, names, setNames, input, setInput)}>
                <input onChange={(e) => setInput(e.target.value)} value={input} />
                <button>Submit</button>
            </form>
            {names.map(names => (
                <ListComponent key ={names} Names={names}/>
            ))}
        </div>
    )
}