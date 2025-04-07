import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./Components/nav";

function App() {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
