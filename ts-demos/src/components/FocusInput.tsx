import { useRef } from "react";

const FocusInput = () => {
  const focus = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    focus.current?.focus();
  };

  return (
    <div>
      <h1>FocusInput</h1>
      <hr />
      <input type="text" ref={focus} onChange={(e) => e.target.value} />
      <button onClick={handleFocus}>Type</button>
    </div>
  );
};

export default FocusInput;
