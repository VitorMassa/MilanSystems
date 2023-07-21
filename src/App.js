import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <div className="mt-14 ">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
