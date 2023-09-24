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
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchOnePost.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default onePostSlice.reducer;
