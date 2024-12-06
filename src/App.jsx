import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todolist, settodolist] = useState([]);

  const handlechange = (e) => {
    setTodo(e.target.value);
  };

  const addtask = () => {
    if (todo.trim()) {
      settodolist([...todolist, todo]);
      setTodo("");
    }
  };

  return (
    <>
      <div>
        <input type="text" value={todo} onChange={handlechange} />
        <button onClick={addtask}>Add</button>
        {todolist.map((item, index) => {
          <li key={index}>{item}</li>;
        })}
      </div>
    </>
  );
};

export default App;
