// import { createAction } from "@reduxjs/toolkit";

// const incrementAction = {
//   type: "INCREMENT",
//   payload: 1,
// };

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENTbyValue = "INCREMENTbyValue";


export const addCounter = () => {
  return { type: INCREMENT };
};
export const removeCounter = () => {
  return { type: DECREMENT };
};

export const incrementByValue = (value) => {
  return {
    type: INCREMENTbyValue,
    payload: {
      incrementBy: value,
    },
  };
};

// export const increment=(numberToIncrement)=>{
//     type:"INCREMENT",
//     payload:{
//         incrementBy:numberToIncrement,
//     }
// }

// const incrementByFive=createAction("INCREMENTBY5");

// incrementByFive({incrementBy:5})
// const increment = createAction(INCREMENT, (numberToIncrement = 1) => ({
//   payload: {
//     incrementBy: numberToIncrement,
//   },
// }));
