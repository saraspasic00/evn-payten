import { configureStore } from "@reduxjs/toolkit";
import userNumberSlice from "./userSlice";
import navigationSlice from "./navigationSlice";
import MeterSlice from "./MeterSlice";

const store = configureStore({
  reducer: {
    userNumber: userNumberSlice.reducer,
    navigation: navigationSlice.reducer,
    meters: MeterSlice.reducer,
  },
});

export default store;
