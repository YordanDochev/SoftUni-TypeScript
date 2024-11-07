import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const selectionSlice = createSlice({
  name: "selection",
  initialState,
  reducers: {
    loadSelectionBase: (state, action) => {
      return action.payload;
    },
    updateSelectionBase: (state, action) => {
      const { value, key } = action.payload;

      if (!state[key].fields?.includes(value)) {
        // Add the new value if it's not already in the array
        state[key].fields.push({
          name: value,
          thermalConductivity: 0,
        });
      }
    },
  },
});

export const { updateSelectionBase, loadSelectionBase } =
  selectionSlice.actions;
export default selectionSlice.reducer;
