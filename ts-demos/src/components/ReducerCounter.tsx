import { useReducer } from "react";

type Action = { type: "INCREMENT" } | { type: "DECREMENT" } | { type: "RESET" };

type State = {
  count: number;
};

const ReducerCounter = () => {
  const reducer = (state: State, action: Action) => {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
      case "DECREMENT":
        return { count: state.count - 1 };
      case "RESET":
        return { count: state.count * 0 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <h1>ReducerCounter</h1>
      <hr />
      <h2>Count : {state.count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ReducerCounter;
