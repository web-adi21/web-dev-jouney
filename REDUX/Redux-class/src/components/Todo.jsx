import { useSelector } from "react-redux";
import AddForm from "./AddForm";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return(
    <>

      <h2>Todos</h2>
      <AddForm/>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}> {todo.task} </li>
        ))}
      </ul>
    </>
  )
}