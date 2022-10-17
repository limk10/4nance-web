import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

const INITIAL_STATE = {
  formData: {},
  formErrors: [],
};

const formSlice = createSlice({
  name: "form",
  initialState: INITIAL_STATE,
  reducers: {
    // Form responsability
    handleFormData(state, { payload }) {
      const { group, name, value } = payload;

      if (group) _.set(state.formData, [group, name], value);
      else _.set(state.formData, [name], value);
    },

    handleFormError(state, { payload }) {
      state.formErrors = payload;
    },

    // Setters for formData
    setFormData(state, { payload }) {
      const { group, values } = payload;

      if (group) _.set(state.formData, [group], values);
      else _.set(state, "formData", values);
    },
  },
});

export const { handleFormData, handleFormError, setFormData } =
  formSlice.actions;

export const useForm = (state) => {
  return state.form;
};

export default formSlice.reducer;
