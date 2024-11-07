import { descriptionConstructionWorks } from "./DescriptionConstructionWorks";

export const calculationConstructionWorksFormulas =
  (calculationConstructionWorksTable, descriptionConstructionWorksTable) =>
  (_, cell, rowIndex, colIndex) => {
    const { operation } = cell;

    const getCellValue = (
      rowOffset = 0,
      colOffset = 0,
      table = "calculationConstructionWorksTable"
    ) => {
      const data =
        table === "descriptionConstructionWorksTable"
          ? descriptionConstructionWorksTable
          : calculationConstructionWorksTable;

      let cell = {};
      if (table === "descriptionConstructionWorksTable") {
        cell = data[data.length - 1]["data_summary"][colIndex + colOffset];
      } else {
        cell =
          data[rowIndex + rowOffset][`data_${rowIndex + rowOffset}`][
            colIndex + colOffset
          ];
      }

      if (cell?.formula) {
        return table === "calculationConstructionWorksTable"
          ? calculationConstructionWorksFormulas(
              calculationConstructionWorksTable,
              descriptionConstructionWorksTable
            )(_, cell, rowIndex + rowOffset, colIndex + colOffset)
          : descriptionConstructionWorks(descriptionConstructionWorksTable)(
              _,
              cell,
              rowIndex + rowOffset,
              colIndex + colOffset
            );
      }

      return parseFloat(cell?.value);
    };

    if (operation === "calcFinalEnergySavedElectricity") {
      if (isNaN(getCellValue(0, -1))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(0, -1) * 0.2).toFixed(2);
    } else if (operation === "calcNonRenewableEnergyElectricity") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-1, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-1, 0) * getCellValue(0, -1)).toFixed(2);
    } else if (operation === "calcRenewableEnergyElectricity") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-2, 0))) {
        return "Въвдете необходимите данни";
      }

      return (
        parseFloat(getCellValue(-2, 0)) * parseFloat(getCellValue(0, -1))
      ).toFixed(2);
    } else if (operation === "calcSavedEmissionsElectricity") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-3, 0))) {
        return "Въвдете необходимите данни";
      }
      return parseFloat(
        getCellValue(-3, 0) * (getCellValue(0, -1) / 1000)
      ).toFixed(1);
    } else if (operation === "calcResources/YearElectricity") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-4, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-4, 0) * getCellValue(0, -1)).toFixed(1);
    } else if (operation === "calcFinalEnergySavedGas") {
      if (isNaN(getCellValue(-5, -1))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-5, -1) * 0.8).toFixed(1);
    } else if (operation === "calcNonRenewableEnergyGas") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-1, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-1, 0) * getCellValue(0, -1)).toFixed(1);
    } else if (operation === "calcRenewableEnergyGas") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-2, 0))) {
        return "Въвдете необходимите данни";
      }

      return (
        parseFloat(getCellValue(-2, 0)) * parseFloat(getCellValue(0, -1))
      ).toFixed(2);
    } else if (operation === "calcSavedEmissionsGas") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-3, 0))) {
        return "Въвдете необходимите данни";
      }
      return parseFloat(
        getCellValue(-3, 0) * (getCellValue(0, -1) / 1000)
      ).toFixed(1);
    } else if (operation === "calcResources/YearGas") {
      if (isNaN(getCellValue(0, -1)) || isNaN(getCellValue(-4, 0))) {
        return "Въвдете необходимите данни";
      }

      return parseFloat(getCellValue(-4, 0) * getCellValue(0, -1)).toFixed(1);
    } else if (operation === "calcPaybackPeriod") {
      if (
        isNaN(getCellValue(-6, -2, "descriptionConstructionWorksTable")) ||
        isNaN(getCellValue(-6, 0)) ||
        isNaN(getCellValue(-1, 0))
      ) {
        return "Въвдете необходимите данни";
      }

      return (
        parseFloat(getCellValue(-6, -2, "descriptionConstructionWorksTable")) /
        (parseFloat(getCellValue(-1.0)) + parseFloat(getCellValue(-6, 0)))
      ).toFixed(6);
    } else if (operation === "notShow") {
      return "не участва в изчисленията";
    }

    return "Err!";
  };
