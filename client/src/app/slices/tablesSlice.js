import { createSlice } from "@reduxjs/toolkit";
import {
  ROOF_TABLES,
  WALLS_TABLES,
  WINDOWS_TABLES,
  ZONES_TABLES,
  FLOOR_TABLES,
  BGV_TABLES,
  ESM_TABLES,
} from "../mock/tables/tables.mock";
// import { ESM_TABLES, ZONES_TABLES } from "../mock/tables/tables.mock";
// import { FLOOR_TABLES } from "../mock/tables/test.mock";

// TODO: initialize with hardcoded headers from mock file if new project
// to do this - add a new action to the slice i.e. loadInitialTables

const initialState = {};

export const tableSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    loadTables: (state, action) => {
      return action.payload;
    },
    addTable: (state, action) => {
      const { tableSlice, table, position } = action.payload;

      // Initialize the slice if it doesn't exist
      if (!state[tableSlice]) {
        state[tableSlice] = [];
      }

      if (position !== undefined) {
        // Insert the table at the specific position
        state[tableSlice].splice(position, 0, table);
      } else {
        // Otherwise, push the table to the end of the slice
        state[tableSlice].push(table);
      }
    },
    deleteTable: (state, action) => {
      const { tableSlice, index, additionalTableDelete } = action.payload;
      for (let i = 0; i <= additionalTableDelete; i++) {
        state = {
          ...state,
          [tableSlice]: state[tableSlice].filter((_, count) => count !== index),
        };
      }
      return {
        ...state,
      };
    },
    addRow: (state, action) => {
      const { table, index, row, position, keyCoeff } = action.payload;
      let key = 0;

      if (keyCoeff === undefined) {
        key = state[table][index].data.length;
      } else {
        key = state[table][index].data.length - keyCoeff;
      }

      if (position !== undefined) {
        state[table][index].data.splice(position, 0, { [`data_${key}`]: row });
      } else {
        // Otherwise, push the row to the end
        state[table][index].data.push({ [`data_${key}`]: row });
      }
    },
    deleteRow: (state, action) => {
      const { table, index, row, rows } = action.payload;

      state[table][index].data = rows.filter((r) => r !== row);
    },
    updateCell: (state, action) => {
      const { table, index, row, suffix, col, value } = action.payload;
      const dataKey = `data_${suffix}`;

      state[table][index].data[row][dataKey][col].value = value;
    },
    updateHeading: (state, action) => {
      const { table, value, index } = action.payload;

      state[table][index].heading = value;
    },
    // TODO: this is a temporary function to add and modify redux data
    reduxMagic: (state) => {
      return {
        ...state,
        // lighting: LIGHTING_TABLES,
        zones: ZONES_TABLES,
        floor: FLOOR_TABLES,
        walls: WALLS_TABLES,
        windows: WINDOWS_TABLES,
        roof: ROOF_TABLES,
        bgv: BGV_TABLES,
        ecm: ESM_TABLES,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTable,
  deleteTable,
  addRow,
  deleteRow,
  updateCell,
  loadTables,
  updateHeading,
  reduxMagic,
} = tableSlice.actions;

export default tableSlice.reducer;
