import { useContext } from "react";
import "./App.css";
import { AppContext } from "./Context/AppContext";
import Main from "./pages/Main";

function App() {
  const { night } = useContext(AppContext);
  return (
    <div className={night ? "App" : "App-light"}>
      <div className="lorem-heading">
        Lorem Ipsum is simply dummy text of the printing
      </div>
      <Main />
    </div>
  );
}

export default App;
