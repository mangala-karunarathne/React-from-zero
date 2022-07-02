import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
  const [age, setAge] = useState(20);
  const clicked = () => {
    setCount((c) => c + 1);
  };

  useEffect(() => {
    setCalculation(() => count * 2 + 1);
    setAge(() => age + 5);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={clicked}>+</button>
      <p>Calculation: {calculation}</p>
      <p>Age Becomes: {age}</p>
    </>
  );
}

export default Counter;
