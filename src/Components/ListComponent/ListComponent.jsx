import React from 'react'
import axios from "axios";


const submit = () => {
    axios.post("http://localhost:3001/createweeklyassigner", {
            name : 'leo',
            taskAssigned : 'abc',
            position : 6
           
        }).then(()=> {
            console.log('ok i guess')
        });
           
        };
    


export default ({Names, Tasks}) => (
    <div>
        <p>{Names}</p>
        <p>{Tasks}</p>
        <button onClick={submit}>SUBMITTOBACKEND</button>

    </div>
)