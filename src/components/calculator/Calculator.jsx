import React, { useContext, useState } from "react";
import "./Calculator.css"; // CSS file for styling
import { Context } from "../Context";

const Calculator = () => {
  const [input, setInput] = useState("");

  const display = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      console.log(error);
      setInput(error);
    }
  };
  const userData = useContext(Context);
  return (
    <div className="main-body">
      <div className="calculator-container">
        <div className="calculator">
          <div className="display">{input || "0"}</div>
          <div className="buttons">
            <button onClick={clear} className="span-two">
              AC
            </button>
            <button onClick={() => display("/")}>/</button>
            <button onClick={() => display("*")}>*</button>
            <button onClick={() => display("7")}>7</button>
            <button onClick={() => display("8")}>8</button>
            <button onClick={() => display("9")}>9</button>
            <button onClick={() => display("-")}>-</button>
            <button onClick={() => display("4")}>4</button>
            <button onClick={() => display("5")}>5</button>
            <button onClick={() => display("6")}>6</button>
            <button onClick={() => display("+")}>+</button>
            <button onClick={() => display("1")}>1</button>
            <button onClick={() => display("2")}>2</button>
            <button onClick={() => display("3")}>3</button>
            <button onClick={() => display(".")}>.</button>
            <button onClick={() => display("0")}>0</button>
            <button onClick={() => display("00")}>00</button>
            <button onClick={calculate} className="span-two">
              =
            </button>
          </div>
        </div>
      </div>
      <p>{userData.name}</p>
    </div>
  );
};

export default Calculator;
