import { createContext, useState, type ReactNode } from "react";

type MyContextProp = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

export const MyContext = createContext<MyContextProp>({
  count: 0,
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});

type MyProviderProp = {
  children: ReactNode;
};

export const MyContextProvider = ({ children }: MyProviderProp) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <MyContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </MyContext.Provider>
  );
};
