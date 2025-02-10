import { useRef, useState } from "react";

function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  const incrementRef = () => {
    countRef.current += 1;
    console.log("Ref Count:", countRef.current);
  };

  const incrementState = () => {
    setCount(count + 1);
  };
  const focusRef = useRef();

  const focus = () => {
    focusRef.current.focus();
  };
  return (
    <div>
      <input type="text" name="" ref={focusRef} id="" />
      <button onClick={focus}>Focus</button>
      <p>State Count: {count}</p>
      <p>Ref Count: {countRef.current}</p>
      <button onClick={incrementState}>Increment State</button>
      <button onClick={incrementRef}>Increment Ref</button>
    </div>
  );
}

export default Counter;
