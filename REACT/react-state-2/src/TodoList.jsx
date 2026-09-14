import { useState } from "react";


export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let add = () => {
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  }

  return(
    <div>
      <input value={newTodo} placeholder="Add a task" onChange={updateTodoValue}></input>
      <br></br>
      <br></br>
      <button onClick={add}>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
    <h4>Tasks Todo</h4>
    <ul>
      {
        todos.map((todo, index) => (
          <li key={`${todo}-${index}`}>{todo}</li>
        ))
      }
    </ul>
    </div>
  )
}