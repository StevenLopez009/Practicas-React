import "./App.css";
import Aside from "./components/Aside";
import Principal from "./pages/Menu";

function App() {
  return (
    <div className="principal">
      <Aside />
      <Principal />
    </div>
  );
}

export default App;
