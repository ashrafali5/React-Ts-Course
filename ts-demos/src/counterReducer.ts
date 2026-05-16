export type CounterAction =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "reset" };
export type CounterState = {
  count: number;
};

export const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: state.count * 0 };
    default:
      return state;
  }
};
