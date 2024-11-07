export const formatFormulaOutput = (value) => {
  return isNaN(value) ? "" : value.toFixed(2);
};

export const getRowData = (row) => {
  return Array.isArray(row) ? row : Object.values(row)[0];
};
