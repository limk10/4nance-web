import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  modalityList: [],
  categoryList: [],
};

const operationSlice = createSlice({
  name: "operation",
  initialState: INITIAL_STATE,
  reducers: {
    handleModalityList(state, { payload }) {
      state.modalityList = payload;
    },
    handleCategoryList(state, { payload }) {
      state.categoryList = payload;
    },
  },
});

export const { handleModalityList, handleCategoryList } =
  operationSlice.actions;
export const useOperation = (state) => {
  return state.operation;
};

export default operationSlice.reducer;
