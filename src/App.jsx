import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ReactFormHook from "./components/ReactFormHook";
import Calculator from "./components/calculator/Calculator";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ReactFormHook />}></Route>{" "}
          <Route path="/calculator" element={<Calculator />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
