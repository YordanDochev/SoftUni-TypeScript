//! ADD FORMULAS

const floorFormula = {
  calcThermalConductivity: (_, row) => {
    if (!row[0][1]?.value || row[0][1]?.value === "") {
      return "не участва в изчисленията";
    }
    const thickness = row[0][1].value;
    const conductivity = row[0][3].value;

    return Number((thickness / 100 / conductivity).toFixed(5));
  },
  calcTotalLayerResistance: (rows) => {
    let totalResistance = 0;
    for (let i = 0; i < rows.length; i++) {
      const layerResistane = floorFormula.calcThermalConductivity(
        null,
        rows[i]
      );
      if (
        layerResistane !== null &&
        layerResistane !== "не участва в изчисленията"
      ) {
        totalResistance += layerResistane;
      }
    }

    return Number(totalResistance.toFixed(5));
  },
};

export const actualConditionFormulas =
  (additionalData) => (row, cell, _, __, rows) => {
    const formula = cell.formula;

    // Using Object values, because the row's structure is like: { data_0: [{ value: 0 }, {value: 2}] }
    const cleanRows = rows.map((row) => Object.values(row));
    return floorFormula[formula](cleanRows, Object.values(row));
  };
