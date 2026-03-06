import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const fetchUser = createAsyncThunk("user/fetch", async function () {
  try {
    const { data } = await api.get("/todos?limit=3&skip=10");
    console.log("data", data.todos);
    return data.todos;
  } catch (error) {
    console.error(error);
    throw new Error("error while fetch data", error);
  }
});

export const AddUser = createAsyncThunk("user/post", async function (data) {
  try {
    const res = await api.post("/todos/add", data);
    console.log("res of post ", res);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("error while post user", error);
  }
});

export const DeleteUser = createAsyncThunk("user/delete", async function (id) {
  try {
    const res = await api.delete(`/todos/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
    throw new Error("error while delete user user", error);
  }
});

export const UpdateUser = createAsyncThunk(
  "user/update",
  async function (id, data) {
    try {
      console.log("update value", id, data);
      const res = await api.put(`/todos/${id}`, data);
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("error while delete user user", error);
    }
  },
);
const initialState = {
  todos: [],
  Loading: "idle",
  fetchTodosLoading: "idle",
  addTodoLoading: "idle",
  deleteTodoLoading: "idle",
  updateTodoLoading: "idle",
};

const TodoSlice = createSlice({
  name: "Todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //fetch users
    builder.addCase(fetchUser.pending, (state) => {
      state.fetchTodosLoading = "pending";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.fetchTodosLoading = "success";
      state.todos = action.payload;
      console.log("todos fetched", state.todos);
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.fetchTodosLoading = "rejected";
    });

    //add users
    builder.addCase(AddUser.pending, (state) => {
      state.addTodoLoading = "pending";
    });
    builder.addCase(AddUser.fulfilled, (state, action) => {
      state.addTodoLoading = "success";
      state.todos = [...state.todos, action.payload];
      console.log("add todos", state.todos);
    });
    builder.addCase(AddUser.rejected, (state) => {
      state.addTodoLoading = "rejected";
    });

    //delete user
    builder.addCase(DeleteUser.pending, (state) => {
      state.deleteTodoLoading = "pending";
    });
    builder.addCase(DeleteUser.fulfilled, (state, action) => {
      state.deleteTodoLoading = "success";
      console.log("");
      state.todos = state.todos.filter(
        (obj) => obj.userId !== action.payload.id,
      );
      // state.todos = [...state.todos, action.payload];
      console.log("delete  userId", state.todos);
    });
    builder.addCase(DeleteUser.rejected, (state) => {
      state.deleteTodoLoading = "rejected";
    });

    //update user
    builder.addCase(UpdateUser.pending, (state) => {
      state.updateTodoLoading = "pending";
    });
    builder.addCase(UpdateUser.fulfilled, (state, action) => {
      state.updateTodoLoading = "success";
      // state.todos = state.todos.filter(
      //   (obj) => obj.userId !== action.payload.id,
      // );
      // state.todos=state.todos.map((obj)=>{
      //   // obj.userId
      // })
      // state.todos = [...state.todos, action.payload];
      console.log("delete  userId", state.todos);
    });
    builder.addCase(UpdateUser.rejected, (state) => {
      state.updateTodoLoading = "rejected";
    });
  },
});

export default TodoSlice.reducer;
