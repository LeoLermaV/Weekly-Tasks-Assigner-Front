import { useState } from "react";
import CreateWeeklyAssignerComponent from "./Components/CreateWeeklyAssignerComponent/CreateWeeklyAssignerComponent";

export default () => {
    const [todos, setTodos] = useState([]);
  
    
  
    return (
      <div className="App">
        <CreateWeeklyAssignerComponent
          onSubmit={text => setTodos([{ text, complete: false }, ...todos])}
        />
        <div>
          {todos.map(({ text, complete }, i) => (
            <div key={text}>
              {text}
            </div>
          ))}
        </div>
        <button onClick={() => setTodos([])}>reset</button>
      </div>
    );
  };