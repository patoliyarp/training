import React, { useState, useCallback } from "react";

const ChildComponent = React.memo(({ onIncrement }) => {
  console.log("ChildComponent rendered");
  return <button onClick={onIncrement}>Increment</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Count: {count}</p>
      <ChildComponent onIncrement={increment} />
    </div>
  );
}

export default ParentComponent;
