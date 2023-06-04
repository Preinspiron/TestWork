import { createSlice } from "@reduxjs/toolkit";

const followSlice = createSlice({
  name: "follow",
  initialState: { follows: [] },
  reducers: {
    setFollow(state, { payload: id }) {
      state.follows.push({ id });
    },
    removeFollow(state, { payload: id }) {
      state.follows = state.follows.filter((item) => item.id !== id);
    },
  },
});

export const { setFollow, removeFollow } = followSlice.actions;
export default followSlice.reducer;
