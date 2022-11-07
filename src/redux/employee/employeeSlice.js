import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  employeeList: [],
};

const employeeSlice = createSlice({
  name: "employee",
  initialState: INITIAL_STATE,
  reducers: {
    handleEmployeeList(state, { payload }) {
      state.employeeList = payload;
    },
  },
});

export const { handleEmployeeList } = employeeSlice.actions;
export const useEmployee = (state) => {
  return state.employee;
};

export default employeeSlice.reducer;
