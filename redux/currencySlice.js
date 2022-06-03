import { createSlice } from "@reduxjs/toolkit";

export const currencySlice = createSlice({
  name: "currency",
  initialState: {
    value: 1,
  },
  reducers: {
    euro: (state) => {
      state.value = 1;
    },
    dollar: (state) => {
      state.value = 2;
    },
    pounds: (state) => {
      state.value = 3;
    },
  },
});

export const { euro, dollar, pounds } = currencySlice.actions;

export default currencySlice.reducer;
