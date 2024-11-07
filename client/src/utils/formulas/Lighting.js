import { formatFormulaOutput, getRowData } from "./common";

const ACTUAL_POWER_COEFFICIENTS = {
  2: 2.64,
  7: 2.64,
  10: 8.3,
  15: 10,
  19: 10,
};

export const lightingFormulas =
  (tables, tableIndex) => (row, cell, rowIndex, colIndex, rows) => {
    const { operation } = cell;
    const rowData = getRowData(row);

    const getTotalPower = (row) => {
      const power = parseFloat(row[1].value);
      const count = +row[2].value;
      return formatFormulaOutput((power * count) / 1000);
    };

    if (operation === "totalPower") {
      return getTotalPower(rowData);
    } else if (operation === "workingPower") {
      const totalPower = getTotalPower(rowData);
      const coeff = parseFloat(rowData[4].value);

      return formatFormulaOutput(totalPower * coeff);
    } else if (
      operation === "actualWorkingPowerPerArea" ||
      operation === "normalisedWorkingPowerPerArea"
    ) {
      let conditionIndex = 18;
      if (tableIndex === 2) {
        conditionIndex = 1;
      } else if (tableIndex === 7) {
        conditionIndex = 6;
      } else if (tableIndex === 10) {
        conditionIndex = 9;
      } else if (tableIndex === 15) {
        conditionIndex = 14;
      }

      const conditionedArea = parseFloat(
        tables[conditionIndex]?.data[0]?.data_0[1]?.value
      );

      let dataIndex = 17;
      if (tableIndex === 2) {
        dataIndex = 0;
      } else if (tableIndex === 7) {
        dataIndex = 5;
      } else if (tableIndex === 10) {
        dataIndex = 8;
      } else if (tableIndex === 15) {
        dataIndex = 13;
      }

      const sumWorkingPower = tables[dataIndex].data.reduce((acc, row) => {
        const rowData = getRowData(row);
        const totalPower = getTotalPower(rowData);
        const coeff = parseFloat(rowData[4].value);

        return acc + totalPower * coeff;
      }, 0);

      let coeff = ACTUAL_POWER_COEFFICIENTS[tableIndex];

      if (operation === "normalisedWorkingPowerPerArea") {
        return formatFormulaOutput((sumWorkingPower * 1000) / conditionedArea);
      }

      return formatFormulaOutput(
        (sumWorkingPower * 1000) / conditionedArea / coeff
      );
    } else if (
      operation === "savedNonRenewableEnergy" ||
      operation === "savedRenewableEnergy" ||
      operation === "savedMoneyPerYear" ||
      operation === "savedEmissions"
    ) {
      const firstRow = getRowData(rows[1]);
      const energy = parseFloat(firstRow[2].value);

      const currentRow = getRowData(row);
      const coeff = parseFloat(currentRow[3].value);

      if (operation === "savedEmissions") {
        return formatFormulaOutput((energy * coeff) / 1000);
      }

      return formatFormulaOutput(energy * coeff);
    } else if (operation === "totalEnergySaved") {
      const firstRow = getRowData(rows[1]);
      const energy = parseFloat(firstRow[2].value);

      const nonRenewableRow = getRowData(rows[2]);
      const renewableRow = getRowData(rows[3]);

      return formatFormulaOutput(
        energy *
          (parseFloat(nonRenewableRow[3].value) +
            parseFloat(renewableRow[3].value))
      );
    } else if (operation === "buyoutPeriod") {
      const budgetData = tables[tableIndex - 1].data;
      const totalBudget = budgetData.reduce((acc, row, index) => {
        const rowData = getRowData(row);
        if (index === 0 || index === budgetData.length - 1) {
          return acc;
        }
        const count = parseFloat(rowData[3].value);
        const price = parseFloat(rowData[4].value);

        return formatFormulaOutput(acc + count * price);
      }, 0);

      const firstRow = getRowData(rows[1]);
      const energy = parseFloat(firstRow[2].value);
      const previousRow = getRowData(rows[6]);
      const coeff = parseFloat(previousRow[3].value);

      const savedMoneyPerYear = formatFormulaOutput(energy * coeff);

      return formatFormulaOutput(totalBudget / savedMoneyPerYear);
    } else if (operation === "sumLampMoney" || operation === "sumUnitsMoney") {
      const rowData = getRowData(row);

      const count = parseFloat(rowData[3].value);
      const price = parseFloat(rowData[4].value);

      return formatFormulaOutput(count * price);
    } else if (
      operation === "totalLampTableMoney" ||
      operation === "totalUnitsTableMoney"
    ) {
      const sum = rows.reduce((acc, row, index) => {
        const rowData = getRowData(row);

        if (index === 0 || index === rows.length - 1) {
          return acc;
        }
        const count = parseFloat(rowData[3].value);
        const price = parseFloat(rowData[4].value);

        return acc + count * price;
      }, 0);

      return formatFormulaOutput(sum);
    }

    return "Err!";
  };

export const lightingTotalsConfig = {
  kW: {
    type: "float",
    operation: "sum",
  },
};
