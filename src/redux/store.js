import { configureStore } from "@reduxjs/toolkit";

import generalSlice from "./general/generalSlice";
import formSlice from "./form/formSlice";

const store = configureStore({
  reducer: {
    general: generalSlice,
    form: formSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
