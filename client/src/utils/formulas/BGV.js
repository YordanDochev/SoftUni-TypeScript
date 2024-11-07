export const bgvFormulas =
  (data, moneyData = undefined) =>
  (_, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    const getCellValue = (rowOffset = 0, colOffset = 0, table) => {
      const cell =
        data[rowIndex + rowOffset][`data_${rowIndex + rowOffset}`][
          colIndex + colOffset
        ];

      if (cell?.formula) {
        return bgvFormulas(data)(
          _,
          cell,
          rowIndex + rowOffset,
          colIndex + colOffset
        );
      }

      return parseFloat(cell?.value);
    };

    if (operation === "multiply") {
      return (
        parseFloat(getCellValue(3, 0)) * parseFloat(getCellValue(4, 0))
      ).toFixed(2);
    } else if (operation === "multiplyDivide") {
      return (
        (parseFloat(getCellValue(1, 0)) * parseFloat(getCellValue(2, 0))) /
        1000.0
      ).toFixed(2);
    } else if (operation === "multiplyDivideAll") {
      return (
        (parseFloat(getCellValue(-rowIndex, 0)) *
          parseFloat(getCellValue(-rowIndex + 1, 0)) *
          parseFloat(getCellValue(-rowIndex + 2, 0)) *
          (parseFloat(getCellValue(-rowIndex + 3, 0)) -
            parseFloat(getCellValue(-rowIndex + 4, 0)))) /
        3600.0
      ).toFixed(2);
    } else if (operation === "multiplyBy1000AndDivide") {
      return parseFloat(
        (getCellValue(-rowIndex + 2, 0) * 1000.0) /
          parseFloat(getCellValue(-1, 0))
      ).toFixed(2);
    } else if (operation === "divide") {
      return (
        parseFloat(getCellValue(-3, 0)) / parseFloat(getCellValue(-2, 0))
      ).toFixed(2);
    } else if (operation === "dividePower") {
      return (
        parseFloat(getCellValue(-1, 0)) / parseFloat(getCellValue(-4, 0))
      ).toFixed(2);
    } else if (operation === "multiplyBy28000") {
      return (parseFloat(getCellValue(0, -2)) * 28000).toFixed(2);
    } else if (operation === "multiplyBy02Coeff") {
      return parseFloat(getCellValue(0, 1) * 0.2).toFixed(2);
    } else if (operation === "multiplyByCoeff") {
      return parseFloat(
        getCellValue(-rowIndex, 0) * parseFloat(getCellValue(0, 1))
      ).toFixed(2);
    } else if (operation === "multiplyByCoeffDivide") {
      return (
        parseFloat(
          getCellValue(-rowIndex, 0) * parseFloat(getCellValue(0, 1))
        ) / 1000.0
      ).toFixed(2);
    } else if (operation === "multiplyBy08Coeff") {
      return parseFloat(getCellValue(-rowIndex, 1) * 0.8).toFixed(2);
    } else if (operation === "multiplyByCoeffPrev") {
      return parseFloat(
        getCellValue(-1, 0) * parseFloat(getCellValue(0, 1))
      ).toFixed(2);
    } else if (operation === "multiplyByCoeffPrev2") {
      return parseFloat(
        getCellValue(-2, 0) * parseFloat(getCellValue(0, 1))
      ).toFixed(2);
    } else if (operation === "multiplyByCoeffPrevDivide") {
      return parseFloat(
        getCellValue(-4, 0) * parseFloat(getCellValue(0, 1))
      ).toFixed(2);
    } else if (operation === "multiplyByCoeffPrevDivideBy1000") {
      return (
        parseFloat(getCellValue(-3, 0) * parseFloat(getCellValue(0, 1))) /
        1000.0
      ).toFixed(2);
    } else if (operation === "divideBySum") {
      let moneyDataLastRow = moneyData[moneyData.length - 1];
      let moneyCell =
        Object.values(moneyDataLastRow)[0][
          Object.values(moneyDataLastRow)[0].length - 1
        ];

      let rowI = moneyData.length - 1;
      let colI = Object.values(moneyDataLastRow)[0].length - 1;
      let total = parseFloat(
        bgvFormulas(moneyData, undefined)(_, moneyCell, rowI, colI)
      );

      let sum =
        parseFloat(getCellValue(-1, 0)) + parseFloat(getCellValue(-6, 0));

      return (total / sum).toFixed(2);
    } else if (operation === "sum") {
      return (
        parseFloat(getCellValue(-1, -1)) + parseFloat(getCellValue(-6, -1))
      ).toFixed(2);
    } else if (operation === "multiplyMoney") {
      return parseFloat(
        getCellValue(0, -1) * parseFloat(getCellValue(0, -2))
      ).toFixed(2);
    } else if (operation === "sumAll") {
      let sum = 0;
      let rows = data.length - 1;

      for (let i = 1; i <= rows; i++) {
        let currentCell = getCellValue(-i, 4);
        sum += parseFloat(currentCell);
      }

      if (isNaN(sum)) {
        return 0.0;
      }

      return sum.toFixed(2);
    }

    return "Err!";
  };
