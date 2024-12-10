import AppUi from "./AppUi.jsx";
import { TodoProvider } from "../Context/context.jsx";

//const defaultTodos = [
//{ text: "Cortar cebolla", completed: true },
//{ text: "TERMINAR CURSO", completed: true },
//{ text: "hacer tienda", completed: false },
//];
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {
  return (
    <TodoProvider>
        <AppUi />
    </TodoProvider>
  )
}

export default App;
