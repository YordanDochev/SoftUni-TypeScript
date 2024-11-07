// Store the current data from fromula for current row
let dataFromFormula = {
  epKwhForYearValue: 0,
  epCostForYearValue: 0,
  gasKwhForYearValue: 0,
  gasCostForYearValue: 0,
  sumKWHTotalValue: 0,
};

const formatFormulaOutput = (value, flag) => {
  if (isNaN(value)) {
    return "";
  }

  const formattedValue = value.toFixed(2); // Format the value to two decimal places

  // Check if the formatted value ends with ".00" and remove it if present
  if (flag) {
    if (formattedValue.endsWith(".00")) {
      return formattedValue.slice(0, -3); // Remove the ".00" suffix
    }

    return formattedValue; // Return the formatted value as is
  }
};

const formatAndParseNumber = {
  // Function to format a number with commas as thousands separators
  format: (value) => {
    if (!isNaN(value)) {
      // Ensure the value is rounded to two decimal places
      const formattedValue = value.toFixed(2);

      // Use regular expression to add commas as thousand separators
      return formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return value; // Return the original value if not a number
  },

  // Function to parse a formatted string back to a number
  parse: (value) => {
    if (typeof value === "string") {
      // Remove commas and convert to number
      const cleanedValue = value.replace(/,/g, "");
      return parseFloat(cleanedValue);
    }
    return value; // Return the original value if already a number
  },
};

export const calculateEnergy = (row, cell, rowIndex, colIndex) => {
  const { operation } = cell;

  if (operation === "sumPerYear") {
    // Sum the elements in the row's data array excluding the first two and the last one
    const currentRow = Array.isArray(row[`data_${rowIndex}`])
      ? row[`data_${rowIndex}`]
      : Array(row[`data_${rowIndex}`]);

    const sum = currentRow
      .slice(2, -1) // Exclude the first two and last element
      .reduce((acc, data) => {
        acc += parseFloat(data.value) || 0; // Ensure value is treated as a number, default to 0 if NaN
        return acc;
      }, 0);

    const result = formatAndParseNumber.parse(sum);
    return formatAndParseNumber.format(result); // Return the sum result
  }
  return "Err!";
};

export const actualEnergyFormulas =
  (energyData) => (row, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    // Function to get the value of a cell based on row and column offset
    const getCellValue = (index, colOffset = 0, data) => {
      const cell = data[index][`data_${index}`][colIndex + colOffset];
      if (cell?.formula) {
        const actualRow = data[index];
        const actualColIndex = colIndex + colOffset;
        const actualRowIndex = index;

        return calculateEnergy(
          actualRow,
          cell,
          actualRowIndex,
          actualColIndex,
          cell.formula
        );
      }
    };

    if (operation === "getEPKwhForYear") {
      if (energyData[2]?.data === undefined) {
        return 0;
      }
      const data = energyData[2].data;
      const year = row[`data_${rowIndex}`][0];
      const rowTemp = data.filter((obj) => {
        // Extract the first key of the object
        const key = Object.keys(obj)[0];
        // Check if the first object's value in the array matches the provided year
        return obj[key][0].value === year.value;
      });
      if (rowTemp.length > 0) {
        const rowData = rowTemp[0];
        if (rowData && Object.keys(rowData).length > 0) {
          // Assuming you need to trigger the sumPerYear operation on the found row
          const key = Object.keys(rowData)[0]; // Get the key, e.g., "data_0"
          const suffix = key.split("_")[1]; // Get the part after "data_"

          // Invoke the sumPerYear operation on the row
          const sumResult = calculateEnergy(
            rowData,
            { operation: "sumPerYear" },
            suffix,
            colIndex
          );

          // Store or return the sum result
          const result = formatAndParseNumber.parse(sumResult);
          dataFromFormula.epKwhForYearValue = Number(result) || 0;
          return formatAndParseNumber.format(result); // Return the sum result
        }
      } else {
        return "0"; // Handle the case where the year is not found
      }
    } else if (operation === "getEPCostForYear") {
      if (energyData[2]?.data === undefined) {
        return 0;
      }
      const year = row[`data_${rowIndex}`][0];
      const data = energyData[2].data;
      const rowTemp = data.filter((obj) => {
        // Extract the first key of the object
        const key = Object.keys(obj)[0];
        // Check if the first object's value in the array matches the provided year
        return obj[key][0].value === year.value;
      });

      if (rowTemp.length > 0) {
        const rowData = rowTemp[1];
        if (rowData && Object.keys(rowData).length > 0) {
          // Assuming you need to trigger the sumPerYear operation on the found row
          const key = Object.keys(rowData)[0]; // Get the key, e.g., "data_0"
          const suffix = key.split("_")[1]; // Get the part after "data_"

          // Invoke the sumPerYear operation on the row
          const sumResult = calculateEnergy(
            rowData,
            { operation: "sumPerYear" },
            suffix,
            colIndex
          );

          // Store or return the sum result
          const result = formatAndParseNumber.parse(sumResult);
          dataFromFormula.epCostForYearValue = Number(result) || 0;
          return formatAndParseNumber.format(result); // Return the sum result
        }
      } else {
        return "0"; // Handle the case where the year is not found
      }
    } else if (operation === "getGASKwhForYear") {
      if (energyData[1]?.data === undefined) {
        return 0;
      }
      const year = row[`data_${rowIndex}`][0];
      const data = energyData[1].data;
      const rowTemp = data.filter((obj) => {
        // Extract the first key of the object
        const key = Object.keys(obj)[0];
        // Check if the first object's value in the array matches the provided year
        return obj[key][0].value === year.value;
      });

      if (rowTemp.length > 0) {
        const rowData = rowTemp[0];
        if (rowData && Object.keys(rowData).length > 0) {
          // Assuming you need to trigger the sumPerYear operation on the found row
          const key = Object.keys(rowData)[0]; // Get the key, e.g., "data_0"
          const suffix = key.split("_")[1]; // Get the part after "data_"

          // Invoke the sumPerYear operation on the row
          const sumResult = calculateEnergy(
            rowData,
            { operation: "sumPerYear" },
            suffix,
            colIndex
          );

          // Store or return the sum result
          const result = formatAndParseNumber.parse(sumResult);
          dataFromFormula.gasKwhForYearValue = Number(result) || 0;
          return formatAndParseNumber.format(result); // Return the sum result
        }
      } else {
        return "0"; // Handle the case where the year is not found
      }
    } else if (operation === "getGASCostForYear") {
      if (energyData[1]?.data === undefined) {
        return 0;
      }
      const year = row[`data_${rowIndex}`][0];
      const data = energyData[1].data;
      const rowTemp = data.filter((obj) => {
        // Extract the first key of the object
        const key = Object.keys(obj)[0];
        // Check if the first object's value in the array matches the provided year
        return obj[key][0].value === year.value;
      });

      if (rowTemp.length > 0) {
        const rowData = rowTemp[1];

        // Assuming you need to trigger the sumPerYear operation on the found row
        if (rowData && Object.keys(rowData).length > 0) {
          const key = Object.keys(rowData)[0]; // Get the key, e.g., "data_0"
          const suffix = key.split("_")[1]; // Get the part after "data_"

          // Invoke the sumPerYear operation on the row
          const sumResult = calculateEnergy(
            rowData,
            { operation: "sumPerYear" },
            suffix,
            colIndex
          );

          // Store or return the sum result
          const result = formatAndParseNumber.parse(sumResult);
          dataFromFormula.gasCostForYearValue = Number(result) || 0;
          return formatAndParseNumber.format(result); // Return the sum result
        }
      } else {
        return "0"; // Handle the case where the year is not found
      }
    } else if (operation === "sumKWHTotal") {
      // Now that we have the values from the previous "getEPKwhForYear" and "getEPCostForYear" calls, we can sum them and reset them afterward
      const totalKwh =
        formatAndParseNumber.parse(dataFromFormula.epKwhForYearValue) +
        formatAndParseNumber.parse(dataFromFormula.gasKwhForYearValue);
      dataFromFormula.sumKWHTotalValue = totalKwh || 0;

      // Return the formatted total
      return formatAndParseNumber.format(totalKwh);
    } else if (operation === "sumCostTotal") {
      // Now that we have the values from the previous "getEPKwhForYear" and "getEPCostForYear" calls, we can sum them and reset them afterward
      const totalCost =
        formatAndParseNumber.parse(dataFromFormula.epCostForYearValue) +
        formatAndParseNumber.parse(dataFromFormula.gasCostForYearValue);

      // Return the formatted total
      return formatAndParseNumber.format(totalCost);
    } else if (operation === "sumSpecificCost") {
      if (energyData[0]?.data === undefined) {
        return 0;
      }
      const conditionArea =
        energyData[0].data[rowIndex][`data_${rowIndex}`][8]?.value;

      if (conditionArea === "") {
        return 0;
      } else {
        const result = dataFromFormula.sumKWHTotalValue / conditionArea;

        return result.toFixed(2);
      }
    } else if (operation === "sumReferenceCost") {
      if (energyData[0]?.data === undefined) {
        return 0;
      }
      const conditionArea =
        energyData[0].data[rowIndex][`data_${rowIndex}`][8]?.value;
      const regionCoeff =
        energyData[0].data[rowIndex][`data_${rowIndex}`][1]?.value;
      const totalCoeff =
        energyData[0].data[rowIndex][`data_${rowIndex}`][10]?.value;
      if (conditionArea === "" || regionCoeff === "" || totalCoeff === "") {
        return 0;
      } else {
        const result =
          (totalCoeff * dataFromFormula.sumKWHTotalValue) /
          (conditionArea * regionCoeff);

        dataFromFormula.sumKWHTotalValue = 0;
        return result.toFixed(2);
      }
    } else if (operation === "getCostSquareEnergy") {
      const result =
        dataFromFormula.epCostForYearValue / dataFromFormula.epKwhForYearValue;
      // Reset the stored values for the next row
      dataFromFormula.epCostForYearValue = 0;
      dataFromFormula.epKwhForYearValue = 0;
      return isNaN(result) ? 0 : result.toFixed(2);
    } else if (operation === "getCostSquareGas") {
      const result =
        dataFromFormula.gasCostForYearValue /
        dataFromFormula.gasKwhForYearValue;
      // Reset the stored values for the next row
      dataFromFormula.gasCostForYearValue = 0;
      dataFromFormula.gasKwhForYearValue = 0;
      return isNaN(result) ? 0 : result.toFixed(2);
    }

    return "Err!";
  };
