import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addCounter,
  incrementByValue,
  removeCounter,
} from "./redux/actions/counter";
import { store } from "./redux/store";
import { useState } from "react";
import useCounter from "./zustand/store.js";
function App() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  // console.log("store.getState() :>> ", store.getState());
  const [val, setVal] = useState(0);

  //zustand counter

  // function counter() {}
  const [zusCount, setZusCount] = useState(0);
  const counter = useCounter((state) => state.value);
  const increase = useCounter((state) => state.increase);
  const decrease = useCounter((state) => state.decrease);
  const update = useCounter((state) => state.update);

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
      <hr />

      <h1>zustand </h1>
      <input
        type="number"
        value={zusCount}
        onChange={(e) => setZusCount(e.target.value)}
      />
      {count}
      <button onClick={increase}>add to: {counter}</button>
      <button onClick={decrease}>remove to: {counter}</button>
      <button onClick={() => update(Number(zusCount))}>
        increment by {zusCount}
      </button>
    </>
  );
}

export default App;
