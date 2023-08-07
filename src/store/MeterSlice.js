import { createSlice } from "@reduxjs/toolkit";

const MeterSlice = createSlice({
  name: "meters",
  initialState: {
    meter: "",
  },
  reducers: {
    selectedMeter: (state, action) => {
      state.meter = state;
      state.meter = action.payload;
      console.log(state, action);
    },
  },
});
export const meterActions = MeterSlice.actions;
export default MeterSlice;
