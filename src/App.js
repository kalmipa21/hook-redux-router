import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./assets/css/main.css";
function App() {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
