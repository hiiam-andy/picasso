import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../shared/constants/constants";

export const postsAPI = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  tagTypes: ["Post"],

  endpoints: (build) => ({
    fetchOnePost: build.query({
      query: (id) => `/posts/${id}`,
      providesTags: ["Post"],
    }),
  }),
});

export const { useFetchOnePostQuery } = postsAPI;
