import { useContext } from "react";
import { TodoContext } from "../../Context/context";

function TodoSearch() {
  const {searchValue, setSearchValue}= useContext(TodoContext)

  return (
    <input 
      placeholder="Buscar Tarea"
      type="text" 
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
    }}/>
  );
}

export default TodoSearch