import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sample-task",id:uuidv4()}]);
  let [newTodo, setNewTodo] = useState("");

  let add = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, {task: newTodo, id: uuidv4()}]
    });
    setNewTodo("");
  }

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  }

  let DeleteTodo = (id) => {
    console.log(id);
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
        todos.map((todo) => (
          <li key={todo.id}>
            <span>
              {todo.task}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button>Delete</button>
            </span>
          </li>
        ))
      }
    </ul>
    </div>
  )
}