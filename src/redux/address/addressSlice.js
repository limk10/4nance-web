import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  stateList: [],
  cityList: [],
};

const addressSlice = createSlice({
  name: "address",
  initialState: INITIAL_STATE,
  reducers: {
    handleStateList(state, { payload }) {
      state.stateList = payload;
    },
    handleCityList(state, { payload }) {
      state.cityList = payload;
    },
  },
});

export const { handleStateList, handleCityList } = addressSlice.actions;
export const useAddress = (state) => {
  return state.address;
};

export default addressSlice.reducer;
