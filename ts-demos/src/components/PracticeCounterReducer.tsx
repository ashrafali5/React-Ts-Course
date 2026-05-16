import { useReducer } from "react";
import { counterReducer, type CounterState } from "../counterReducer";

const initialState: CounterState = { count: 0 };

const PracticeCounterReducer = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>PracticeCounterReducer</h1>
      <hr />
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>
  );
};

export default PracticeCounterReducer;
