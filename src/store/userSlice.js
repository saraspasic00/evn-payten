import { createSlice } from "@reduxjs/toolkit";

const userNumberSlice = createSlice({
  name: "usernumber",
  initialState: {
    input: 0,
    email: "",
    phone: "",
  },
  reducers: {
    login: (state, action) => {
      state.input = state;
      state.input = action.payload;
    },
    authEmail: (state, acton) => {
      state.email = state;
      state.email = acton.payload;
    },
    authPhone: (state, action) => {
      state.phone = state;
      state.phone = action.payload;
    },
  },
});
export const userActions = userNumberSlice.actions;
export default userNumberSlice;
