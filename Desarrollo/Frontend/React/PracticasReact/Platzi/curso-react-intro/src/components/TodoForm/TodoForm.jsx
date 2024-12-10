import { useContext, useState } from "react";
import "./styles.css"
import { TodoContext } from "../../Context/context";

function TodoForm() {
  const {addTodo,setOpenModal}= useContext(TodoContext)
  const [newTodoValue, setNewTodoValue]= useState("")

  const onSubmit = (event)=>{
    event.preventDefault();
    setOpenModal(false)
    addTodo (newTodoValue)
  }

  const onCancel = (event)=>{
    setOpenModal(false)
  }

  const onChange=(event)=>{
    setNewTodoValue(event.target.value)
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo Todo</label>
      <textarea placeholder="Escribe tu tarea" value={newTodoValue} onChange={onChange}/>
      <button className="cancelar" type="button" onClick={onCancel}>Cancelar</button>
      <button className="aceptar" type="submit" onClick={onSubmit}>Añadir</button>
    </form>
  );
}

export { TodoForm };
