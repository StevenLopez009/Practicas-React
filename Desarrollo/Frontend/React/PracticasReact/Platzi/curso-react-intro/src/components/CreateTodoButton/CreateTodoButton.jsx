function CreateTodoButton() {
  return (
    <button onClick={(event)=> console.log(event.target)}>Crear tarea</button>
  );
}

export default CreateTodoButton