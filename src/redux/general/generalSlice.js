import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  loading: false,
  modalAccountConfirm: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState: INITIAL_STATE,
  reducers: {
    handleLoading(state, { payload }) {
      state.loading = payload;
    },
    handleAccountConfirmation(state, { payload }) {
      state.modalAccountConfirm = payload;
    },
  },
});

export const { handleLoading, handleAccountConfirmation } =
  generalSlice.actions;
export const useGeneral = (state) => {
  return state.general;
};

export default generalSlice.reducer;
