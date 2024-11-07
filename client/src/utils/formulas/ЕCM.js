export const ECMFormulas =
  (data, tableData) => (_, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    const getCellValue = (rowOffset = 0, colOffset = 0, table) => {
      const cell =
        data[rowIndex + rowOffset][`data_${rowIndex + rowOffset}`][
          colIndex + colOffset
        ];

      if (cell?.formula) {
        return ECMFormulas(data)(
          _,
          cell,
          rowIndex + rowOffset,
          colIndex + colOffset
        );
      }

      return parseFloat(cell?.value);
    };

    if (operation === "calcNonRenewableEnergy") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-1, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(0, -1) * getCellValue(-1, 0)).toFixed(2);
    } else if (operation === "calcRenewableEnergy") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-1, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-2, 0) * getCellValue(0, -1)).toFixed(2);
    } else if (operation === "calcPrimaryEnergy") {
      if (isNaN(getCellValue(-1, 0)) || isNaN(getCellValue(-2, 0))) {
        return "Въвдете необходимите данни";
      }

      return (
        parseFloat(getCellValue(-1, 0)) + parseFloat(getCellValue(-2, 0))
      ).toFixed(2);
    } else if (operation === "calcSavedEmissions") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-4, 0))) {
        return "Въвдете необходимите данни";
      }
      return parseFloat(
        (getCellValue(0, -1) / 1000) * getCellValue(-4, 0)
      ).toFixed(1);
    } else if (operation === "calcResources/Year") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-1, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-5, 0) * getCellValue(0, -1)).toFixed(1);
    } else if (operation === "calcTermRedemption") {
      let sum = 0;

      // Loop through each object in the array
      tableData[0].data.forEach((dataObject) => {
        // Get the first key from the object (e.g., "data_0", "data_1")
        const key = Object.keys(dataObject)[0];
        const array = dataObject[key]; // Get the array under this key

        // Get the last object from the array
        const lastObject = array[array.length - 1];

        // Check if the last object has a value and it can be converted to a number
        if (lastObject && lastObject.value) {
          sum += lastObject.value
        }
      });
      
      if(isNaN(getCellValue(-1,0))){
        return "Въвдете необходимите данни";
      }
      return (sum / parseFloat(getCellValue(-1,0))).toFixed(1);
    } else if (operation === "notShow") {
      return "не участва в изчисленията";
    }

    return "Err!";
  };


  