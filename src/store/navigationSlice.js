import { createSlice } from "@reduxjs/toolkit";

const navigationSlice = createSlice({
  name: "navigate",
  initialState: {
    from: "",
    to: "",
  },
  reducers: {
    navigateFrom: (state, action) => {
      state.from = state;
      state.from = action.payload;
    },
    navigateTo: (state, action) => {
      state.to = state;
      state.to = action.payload;
    },
  },
});
export const navigateActions = navigationSlice.actions;
export default navigationSlice;
