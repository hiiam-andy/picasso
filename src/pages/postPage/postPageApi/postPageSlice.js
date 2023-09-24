import axios from "axios";
import { BASE_URL } from "../../../shared/constants/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchOnePost = createAsyncThunk(
  "onePost/getOnePost",
  async (id) => {
    try {
      const res = await axios(`${BASE_URL}/posts/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

const onePostSlice = createSlice({
  name: "onePost",
  initialState: {
    data: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOnePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOnePost.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchOnePost.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default onePostSlice.reducer;
