import { useContext } from "react";
import { MyContext } from "./Context/MyContext";

const ContextCounter = () => {
  const { count, increment, decrement, reset } = useContext(MyContext);
  return (
    <div>
      <h1>ContextCounter</h1>
      <hr />
      <h3>Count : {count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default ContextCounter;
