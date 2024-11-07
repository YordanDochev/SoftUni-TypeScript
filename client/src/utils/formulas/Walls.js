import { calculateWindows as windowsFormula } from "./Windows";

const ROWS_WITH_TYPE_1_WINDOWS = 13;

export const actualConditionFormulas =
  (wallsData, windowData) => (_, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    const getCellValue = (
      rowOffset = 0,
      colOffset = 0,
      table = "actualConditionWalls"
    ) => {
      let data = table === "windows" ? windowData : wallsData;

      if (table === "actualConditionWalls") {
        const actualConditionWallsTable = wallsData.filter(
          (data) => data.type === "ActualCondition"
        );
        data = actualConditionWallsTable[0].data;
      }

      const cell =
        data[rowIndex + rowOffset][`data_${rowIndex + rowOffset}`][
          colIndex + colOffset
        ];

      if (cell?.formula) {
        return table === "windows"
          ? windowsFormula(
              windowData[rowIndex + rowOffset],
              cell,
              rowIndex,
              colIndex + colOffset
            )
          : actualConditionFormulas(wallsData, windowData)(
              _,
              cell,
              rowIndex + rowOffset,
              colIndex + colOffset
            );
      }

      return parseFloat(cell?.value);
    };

    if (operation === "sumCleanAreaOne") {
      return (
        parseFloat(getCellValue(12, -1)) - parseFloat(getCellValue(14, -1))
      ).toFixed(2);
    } else if (operation === "sumCleanAreaTwo") {
      return (
        parseFloat(getCellValue(11, -1)) - parseFloat(getCellValue(13, -1))
      ).toFixed(2);
    } else if (operation === "sumRow") {
      const actualConditionWallsTable = wallsData.filter(
        (data) => data.type === "ActualCondition"
      );
      const row =
        actualConditionWallsTable[0].data[rowIndex][`data_${rowIndex}`];

      const sum = row.slice(colIndex - 4, colIndex).reduce((acc, cell, i) => {
        return (
          parseFloat(
            cell?.formula
              ? actualConditionFormulas(wallsData, windowData)(
                  _,
                  cell,
                  rowIndex,
                  i + colIndex - 4
                )
              : parseFloat(cell?.value)
          ) + acc
        );
      }, 0.0);

      return sum.toFixed(2);
    } else if (operation === "getAreaOne") {
      return (
        (getCellValue(-6) + getCellValue(-5) + getCellValue(-4)) *
        getCellValue(-3)
      ).toFixed(2);
    } else if (operation === "getAreaTwo") {
      return (
        (getCellValue(-7) + getCellValue(-6) + getCellValue(-5)) *
        getCellValue(-3)
      ).toFixed(2);
    } else if (operation === "getWindowAreaTwo") {
      const colOffsets = [0, 6, 7, 8, 9];
      let sum = 0;
      for (let i = 0; i < ROWS_WITH_TYPE_1_WINDOWS; i++) {
        sum += isNaN(
          parseFloat(
            getCellValue(i - rowIndex, colOffsets[colIndex], "windows")
          )
        )
          ? 0
          : parseFloat(
              getCellValue(i - rowIndex, colOffsets[colIndex], "windows")
            );
      }

      return isNaN(sum) ? "NaN" : sum.toFixed(2);
    } else if (operation === "getWindowAreaOne") {
      const colOffsets = [0, 6, 7, 8, 9];
      let sum = 0;
      for (let i = ROWS_WITH_TYPE_1_WINDOWS; i < windowData.length; i++) {
        sum += isNaN(
          parseFloat(
            getCellValue(i - rowIndex, colOffsets[colIndex], "windows")
          )
        )
          ? 0
          : parseFloat(
              getCellValue(i - rowIndex, colOffsets[colIndex], "windows")
            );
      }

      return sum.toFixed(2);
    } else if (operation === "getSumCoeffFirstTable") {
      let sum = 0;

      // Sum the results of `sumKelvinPerWatt` operations across all rows
      wallsData[0].data.forEach((row, rowIndex) => {
        const rowKey = Object.keys(row)[0];
        const rowCells = row[rowKey];

        rowCells.forEach((cell, colIndex) => {
          if (cell.formula && cell.operation === "sumKelvinPerWatt") {
            if (rowCells[1].value !== 0 && rowCells[2].value !== 0) {
              sum +=
                parseFloat(rowCells[1].value) / parseFloat(rowCells[2].value); // Add the result to the total sum
            }
          }
        });
      });
      // Add Rsi and Rs values if they exist
      const rsiRow = wallsData[0].data.find(
        (row) => Object.keys(row)[0] === "data_Rsi"
      );
      const rsRow = wallsData[0].data.find(
        (row) => Object.keys(row)[0] === "data_Rs"
      );

      if (rsiRow) {
        const rsiValue = parseFloat(rsiRow["data_Rsi"][1]?.value || 0); // Assuming value is in the second position
        sum += rsiValue;
      }

      if (rsRow) {
        const rsValue = parseFloat(rsRow["data_Rs"][1]?.value || 0); // Assuming value is in the second position
        sum += rsValue;
      }
      const result = 1 / sum;

      return result.toFixed(2); // Return the sum rounded to two decimal places
    } else if (operation === "getSumCoeffSecondTable") {
      let sum = 0;

      // Sum the results of `sumKelvinPerWatt` operations across all rows
      wallsData[1].data.forEach((row, rowIndex) => {
        const rowKey = Object.keys(row)[0];
        const rowCells = row[rowKey];

        rowCells.forEach((cell, colIndex) => {
          if (cell.formula && cell.operation === "sumKelvinPerWatt") {
            if (rowCells[1].value !== 0 && rowCells[2].value !== 0) {
              sum +=
                parseFloat(rowCells[1].value) / parseFloat(rowCells[2].value); // Add the result to the total sum
            }
          }
        });
      });
      // Add Rsi and Rs values if they exist
      const rsiRow = wallsData[1].data.find(
        (row) => Object.keys(row)[0] === "data_Rsi"
      );
      const rsRow = wallsData[1].data.find(
        (row) => Object.keys(row)[0] === "data_Rs"
      );

      if (rsiRow) {
        const rsiValue = parseFloat(rsiRow["data_Rsi"][1]?.value || 0); // Assuming value is in the second position
        sum += rsiValue;
      }

      if (rsRow) {
        const rsValue = parseFloat(rsRow["data_Rs"][1]?.value || 0); // Assuming value is in the second position
        sum += rsValue;
      }
      const result = 1 / sum;

      return result.toFixed(2); // Return the sum rounded to two decimal places
    }
    return "Err!";
  };

export const outsideConditionFormulas =
  (wallsData) => (row, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    if (operation === "sumKelvinPerWatt") {
      const key = Object.keys(row)[0]; // Get the key, e.g., "data_0"
      const suffix = key.split("_")[1]; // Get the part after "data_"
      const firstValue = row[`data_${suffix}`][colIndex - 2]?.value;
      const secondValue = row[`data_${suffix}`][colIndex - 1]?.value;

      if (firstValue && secondValue) {
        return (
          Math.round((parseFloat(firstValue) / parseFloat(secondValue)) * 100) /
          100
        );
      }
      return "";
    } else if (operation === "sumCoeff") {
      let sum = 0;

      // Sum the results of `sumKelvinPerWatt` operations across all rows
      wallsData.forEach((row, rowIndex) => {
        const rowKey = Object.keys(row)[0];
        const rowCells = row[rowKey];

        rowCells.forEach((cell, colIndex) => {
          if (cell.formula && cell.operation === "sumKelvinPerWatt") {
            if (rowCells[1].value !== 0 && rowCells[2].value !== 0) {
              sum +=
                parseFloat(rowCells[1].value) / parseFloat(rowCells[2].value); // Add the result to the total sum
            }
          }
        });
      });
      // Add Rsi and Rs values if they exist
      const rsiRow = wallsData.find(
        (row) => Object.keys(row)[0] === "data_Rsi"
      );
      const rsRow = wallsData.find((row) => Object.keys(row)[0] === "data_Rs");

      if (rsiRow) {
        const rsiValue = parseFloat(rsiRow["data_Rsi"][1]?.value || 0); // Assuming value is in the second position
        sum += rsiValue;
      }

      if (rsRow) {
        const rsValue = parseFloat(rsRow["data_Rs"][1]?.value || 0); // Assuming value is in the second position
        sum += rsValue;
      }
      const result = 1 / sum;

      return result.toFixed(2); // Return the sum rounded to two decimal places
    }
    return "Err!";
  };

export const outsideWallFormulas = (row, cell, rowIndex, colIndex, rows) => {
  return "Err!";
};
