import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sample-task",id:uuidv4(),isDone:false}]);
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

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
    
    }

  let upperCaseAll = () =>  {
  
  setTodos((prevTodos) => 
    prevTodos.map((todo) => {
      return {
        ...todo,
        task: todo.task.toUpperCase()
      }
    })
  );
};

 let doneTodo = (id) => {
  setTodos((prevTodos) => 
    prevTodos.map((todo) => {
      if(todo.id == id) {
        return{
          ...todo,
          isDone:true
        } 
      }else {
          return todo;
        }
      
    }))
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
            <span className={todo.isDone ? "task-done" : ""}>
              {todo.task}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button onClick={() => {deleteTodo(todo.id)}}>Delete</button>
              <button onClick={() => {doneTodo(todo.id)}}>Done</button>
            </span>
          </li>
        ))
      }
    </ul>
    <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  )
}