import { configureStore } from "@reduxjs/toolkit";
import mainPageSliced from "./store/mainPageSliced";
import { postsAPI } from "./store/postPageQuery";

export const store = configureStore({
  reducer: {
    posts: mainPageSliced,
    [postsAPI.reducerPath]: postsAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsAPI.middleware),
});
