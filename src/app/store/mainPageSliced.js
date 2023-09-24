import axios from "axios";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../shared/constants/constants";

export const fetchPosts = createAsyncThunk("posts/getPosts", async (page) => {
  try {
    const res = await axios(`${BASE_URL}/posts?_limit=10&_page=${page}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    page: 0,
    isLoading: false,
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.data = [...state.data, ...action.payload];
    });
  },
});

export const { setPage, setLoading } = postSlice.actions;

export default postSlice.reducer;
