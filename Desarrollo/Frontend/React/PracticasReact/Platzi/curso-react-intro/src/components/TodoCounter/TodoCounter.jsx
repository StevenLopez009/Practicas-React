import { useContext } from "react";
import "../Styles.css"
import { TodoContext } from "../../Context/context";

function TodoCounter() {
  const {completedTodos, totalTodos}= useContext(TodoContext)
  return (
    <h1>
      {completedTodos < totalTodos
        ? `Has completado ${completedTodos} de ${totalTodos}`
        : "¡Felicidades, has terminado tus tareas!"}
    </h1>
  );
  
}

export default TodoCounter 