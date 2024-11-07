import { configureStore } from "@reduxjs/toolkit";
import constantsReducer from "./slices/constantsSlice";
import tableReducer from "./slices/tablesSlice";
import selectionReducer from "./slices/selectionSlice";

const store = configureStore({
  reducer: {
    constants: constantsReducer,
    tables: tableReducer,
    selection:selectionReducer
  },
});

export default store;
