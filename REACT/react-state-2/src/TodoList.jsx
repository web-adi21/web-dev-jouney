import { useState } from "react";


export default function TodoList() {
  let [todos, setTodos] = useState([]);
  let [newTodo, setNewTodo] = useState("");

  let add = (event) => {
    console.log(event.target);
  }

  return(
    <div>
      <input value={newTodo} placeholder="Add a task" onChange={add}></input>
      <br></br>
      <br></br>
      <button>Add Task</button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
    <h4>Tasks Todo</h4>
    <ul>
      {
        todos.map((todo) => {
          <li>{todo}</li>
        })
      }
    </ul>
    </div>
  )
}