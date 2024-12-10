import TodoCounter from "../components/TodoCounter/TodoCounter.jsx";
import TodoSearch from "../components/TodoSearch/TodoSearch.jsx";
import TodoItem from "../components/TodoItem/TodoItem.jsx";
import CreateTodoButton from "../components/CreateTodoButton/CreateTodoButton.jsx";
import TodoList from "../components/TodoList/TodoList.jsx";

import { TodoContext } from "../Context/context.jsx";
import { useContext } from "react";
import { Modal } from "../components/Modal/Modal.jsx";
import { TodoForm } from "../components/TodoForm/TodoForm.jsx";

function AppUi (){
  const {loading,
    error,
    searchedTodos,
    checkTodo,
    deleteTodo,
    openModal,
    setOpenModal
  }= useContext(TodoContext)
  return (
    <>
      <TodoCounter  />
      <TodoSearch />
        <TodoList>
          {loading && <p>Estamos Cargando...</p>}
          {error && <p>Hubo un Error</p>}
          {(!loading && searchedTodos.length === 0) && <p>Crea un Todo</p>}

          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => checkTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
      <CreateTodoButton openModal={openModal} setOpenModal={setOpenModal} />
      {openModal && <Modal>
        <TodoForm/>
      </Modal>}
      
    </>
  );
}
 
export default AppUi