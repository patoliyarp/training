import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slices/TodoSlice";
import { createLogger } from "redux-logger";
const logger = createLogger();
const store = configureStore({
  reducer: {
    Todos: TodoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
