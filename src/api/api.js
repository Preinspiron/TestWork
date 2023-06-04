import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const api = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://64635d734dca1a66135ba7bc.mockapi.io/",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({ url: "users" }),
      providesTags: (result) => {
        return result
          ? [
              ...result.map(({ id }) => ({ type: "User", id })),
              { type: "User", id: "LIST" },
            ]
          : [{ type: "User", id: "LIST" }];
      },
      transformResponse: (response, meta, arg) => {
        return response.sort((b, a) => a.tweets - b.tweets);
      },
    }),
    // providesTags: (result, error, id) => [{ type: 'Post', id }]
    putUser: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `users/${id}`,
        method: "PUT",
        body: patch,
      }),

      // async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
      //   const patchResult = dispatch(
      //     api.util.updateQueryData('getPost', id, (draft) => {
      //       Object.assign(draft, patch)
      //     })
      //     )
      //     try {
      //       await queryFulfilled
      //     } catch {
      //       patchResult.undo()
      //     }
      //   },
      // invalidatesTags: (result, error, { id }) => [{ type: 'User', id }],
      invalidatesTags: ["User"],
    }),
  }),
});

export default api;
