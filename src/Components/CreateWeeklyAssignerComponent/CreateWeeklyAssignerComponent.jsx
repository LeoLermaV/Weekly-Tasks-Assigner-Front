import React, { useState } from 'react';
import './CreateWeeklyAssignerComponent.css';
import ListComponent from '../ListComponent/ListComponent';

const handleSubmitNames = ( e, names, setNames, nameInput, setInput) => {
    e.preventDefault()
    setNames([...names, nameInput])
    setInput('')
}

const handleSubmitTasks = ( e, tasks, setTasks, taskInput, setTaskInput) => {
    e.preventDefault()
    setTasks([...tasks, taskInput])
    setTaskInput('')
}


export default () => {
    const [names, setNames] = useState([])
    const [nameInput, setInput] = useState('')
    const [tasks, setTasks] = useState([])
    const [taskInput, setTaskInput] = useState('')

    return (
        <div>
            <form  className='Form' onSubmit={(e) => handleSubmitNames(e, names, setNames, nameInput, setInput)}>
                <input onChange={(e) => setInput(e.target.value)} value={nameInput} />
                <button>Submit</button>
            </form>
            <form  className='Form' onClick={(e) => handleSubmitTasks(e, tasks, setTasks, taskInput, setTaskInput)}>
                <input onChange={(e) => setTaskInput(e.target.value)} value={taskInput} />
                <button>Submit</button>
            </form>
            <div className='preview'>
                <div>
                    <h3>Names</h3>
                    <h5>
                        {names.map(names => (
                            <ListComponent key ={names} Names={names}/>
                        ))}
                   </h5>
                </div>
                <div>
                    <h3>Tasks</h3>
                    <h5>
                        {tasks.map(tasks => (
                            <ListComponent key ={tasks} Tasks={tasks}/>
                        ))}
                    </h5>
                </div>
            </div>
        </div>
    )
}