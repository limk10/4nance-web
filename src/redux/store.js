import { configureStore } from "@reduxjs/toolkit";

import generalSlice from "./general/generalSlice";
import addressSlice from "./address/addressSlice";
import employeeSlice from "./employee/employeeSlice";
import operationSlice from "./operation/operationSlice";
import formSlice from "./form/formSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    address: addressSlice,
    employee: employeeSlice,
    operation: operationSlice,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
