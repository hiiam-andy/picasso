import { configureStore } from "@reduxjs/toolkit";
import mainPageSliced from "../pages/MainPage/mainApi/mainPageSliced";
import postPageSlice from "../pages/postPage/postPageApi/postPageSlice";

export const store = configureStore({
  reducer: {
    posts: mainPageSliced,
    onePost: postPageSlice,
  },
});
