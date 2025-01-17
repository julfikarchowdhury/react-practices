import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };
  const reset = () => {
    return setCount(0);
  };
  return (
    <div className="main-body">
      <div className="counter">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>{" "}
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
