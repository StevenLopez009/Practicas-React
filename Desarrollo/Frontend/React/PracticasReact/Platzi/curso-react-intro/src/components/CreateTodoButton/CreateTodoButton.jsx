function CreateTodoButton({ openModal, setOpenModal }) {
  function handleModal() {
    setOpenModal(!openModal); 
  }

  return (
    <button onClick={handleModal}>
      {openModal ? "Cerrar tarea" : "Crear tarea"}
    </button>
  );
}

export default CreateTodoButton;
