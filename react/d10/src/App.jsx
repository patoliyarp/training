import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  incrementByValue,
  removeCounter,
} from "./redux/actions/counter";
import { store } from "./redux/store";
import { useState } from "react";
function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();

  console.log("store.getState() :>> ", store.getState());

  const [val, setVal] = useState(0);
  return (
    <>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      {count}
      <button onClick={() => dispatch(addCounter())}>add to: {count}</button>
      <button onClick={() => dispatch(removeCounter())}>
        remove to: {count}
      </button>
      <button onClick={() => dispatch(incrementByValue(Number(val)))}>
        increment by {val}
      </button>
    </>
  );
}

export default App;
