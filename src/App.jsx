import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import ReactFormHook from "./components/ReactFormHook";
import Calculator from "./components/calculator/Calculator";
import { ContextProvider } from "./components/Context";
function App() {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ReactFormHook />}></Route>{" "}
            <Route path="/calculator" element={<Calculator />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App;
