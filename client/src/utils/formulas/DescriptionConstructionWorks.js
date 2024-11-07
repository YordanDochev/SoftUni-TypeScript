export const descriptionConstructionWorks =
  (data) => (_, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    const getCellValue = (rowOffset = 0, colOffset = 0, table) => {
      const cell =
        data[rowIndex + rowOffset][`data_${rowIndex + rowOffset}`][
          colIndex + colOffset
        ];

      if (cell?.formula) {
        return descriptionConstructionWorks(data)(
          _,
          cell,
          rowIndex + rowOffset,
          colIndex + colOffset
        );
      }

      return parseFloat(cell?.value);
    };

    if (operation === "calculationTotalRowAmount") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(0, -2))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(0, -2) * getCellValue(0, -1)).toFixed(2);
    } else if (operation === "calculationTotalAmount") {
      let sum = 0;

      // Loop through each object in the array
      data.forEach((dataObject) => {
        // Get the first key from the object (e.g., "data_0", "data_1")
        const key = Object.keys(dataObject)[0];

        // Check if the key matches the pattern "data_<number>"
        const match = key.match(/^data_(\d+)$/); // Regex checks if the key is in the format "data_<number>"

        if (match) {
          const number = Number(match[1]); // Extracted number from the key
          
          const array = dataObject[key]; // Get the array under this key

          // Get the last object from the array
          const lastObject = array[array.length - 1];
          if (lastObject?.formula) {
            let value = descriptionConstructionWorks(data)(
              _,
              lastObject,
              number,
              colIndex + 4
            );
            if (isNaN(value)) {
              return sum;
            } else {
              sum += parseFloat(value); // Ensure value is treated as a number
            }
          }
        }
      });
      return sum.toFixed(2);
    }

    return "Err!";
  };
