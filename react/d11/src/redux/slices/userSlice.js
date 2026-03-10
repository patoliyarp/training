import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/axios";

export const fetchUser = createAsyncThunk("users/fetch", async (userQuery) => {
  try {
    const response = await api.get(`/users/search?q=${userQuery}&&limit=10`);
    return response.data.users;
  } catch (error) {
    console.error(error);
    throw new Error("error while fetch data", error);
  }
});

export const fetchUserById = createAsyncThunk(
  "user/fetchById",
  async (userId) => {
    const response = await api.get(`/user/${userId}`);
    return response.data;
  },
);

const initialState = {
  users: [],
  userProfile: [],
  loading: "idle",
  profileLoading: "idle",
  searchQuery: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = "success";
      state.users = action.payload;
    });
    builder.addCase(fetchUser.rejected, (state) => {
      state.loading = "error";
    });

    builder.addCase(fetchUserById.pending, (state) => {
      state.profileLoading = "pending";
    });
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.profileLoading = "success";
      state.userProfile = action.payload;
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.profileLoading = "error";
    });
  },
});

export const { setSearchQuery } = userSlice.actions;
export default userSlice.reducer;
