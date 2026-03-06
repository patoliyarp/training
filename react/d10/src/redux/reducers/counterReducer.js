import { INCREMENT, DECREMENT, INCREMENTbyValue } from "../actions/counter";

const initialState = {
  value: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return {
        ...state,
        value: state.value > 0 ? state.value - 1 : state.value,
      };
    case INCREMENTbyValue:
      return { ...state, value: state.value + action.payload.incrementBy };
    default:
      return state;
  }
};
