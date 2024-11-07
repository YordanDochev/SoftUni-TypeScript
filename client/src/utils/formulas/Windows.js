import { formatFormulaOutput } from "./common";

export const calculateWindows = (row, cell, rowIndex, colIndex) => {
  const { operation } = cell;
  const rowData = Object.values(row)[0];

  const a = rowData[1];
  const b = rowData[2];
  const windowArea = parseFloat(a.value) * parseFloat(b.value);

  if (operation === "windowArea") {
    return formatFormulaOutput(windowArea);
  } else if (
    [
      "northFacadeArea",
      "eastFacadeArea",
      "southFacadeArea",
      "westFacadeArea",
    ].includes(operation)
  ) {
    const n = rowData[colIndex - 1];

    return formatFormulaOutput(parseFloat(n.value) * windowArea);
  } else if (operation === "totalArea") {
    const count =
      +rowData[6].value +
      +rowData[8].value +
      +rowData[10].value +
      +rowData[12].value;

    return formatFormulaOutput(count * windowArea);
  }

  return "Err!";
};

export const windowsTotalsConfig = {
  g: {
    type: "float",
    operation: "average",
  },
  "бр.": {
    type: "int",
    operation: "sum",
  },
  "m(a)": {
    type: "float",
    operation: "sum",
  },
  "m(b)": {
    type: "float",
    operation: "sum",
  },
  "m²": {
    type: "float",
    operation: "sum",
  },
};
