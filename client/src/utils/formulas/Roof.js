export const actualConditionFormulas =
  (
    additionalData,
    totalConstructiveResistanceForU1,
    totalConstructiveResistanceForU2,
    totalConstructiveResistance
  ) =>
  (row, cell, _, __, rows) => {
    const formula = cell.formula;
    // Using Object values, because the row's structure is like: { data_0: [{ value: 0 }, {value: 2}] }
    const cleanRows = rows.map((row) => Object.values(row));
    const rowPrim = Object.values(row);

    const calcVolume = () => {
      const rows = cleanRows[0];

      const loftSlabAreaAboveHeatedFloor = rows[0][1].value; // A1
      const atticAirLayerHeight = rows[0][8].value; // h
      return Number(
        (loftSlabAreaAboveHeatedFloor * atticAirLayerHeight).toFixed(2)
      );
    };
    const calcActualHeathTransferCoefficient = () => {
      const rows = cleanRows[0];

      const loftSlabAreaAboveHeatedFloor = rows[0][1].value; // A1
      const loftSlabHeathTransferCoefficient = calcU1(
        null,
        null,
        additionalData,
        totalConstructiveResistanceForU1
      ); // U1
      const roofArea = rows[0][3].value; // A2
      const roofHeathTransferCoefficient = calcU2(
        null,
        null,
        additionalData,
        null,
        totalConstructiveResistanceForU2
      ); // U2
      const wallArea = rows[0][5].value; // Aw
      const wallHeathTransferCoefficient = rows[0][6].value; // Uw
      const airExchangeCoefficient = rows[0][7].value; // n
      const atticVolume = calcVolume(cleanRows); // V

      return Number(
        (
          1 /
          (1 / loftSlabHeathTransferCoefficient +
            loftSlabAreaAboveHeatedFloor /
              (roofArea * roofHeathTransferCoefficient +
                wallArea * wallHeathTransferCoefficient +
                0.33 * airExchangeCoefficient * atticVolume))
        ).toFixed(3)
      );
    };
    const calcActualHeathTransferCoefficient2 = () => {
      return Number(
        (
          0.1 +
          calcTotalLayerResistance(totalConstructiveResistance) +
          0.04
        ).toFixed(3)
      );
    };
    const calcThermalConductivity = (rowPrim) => {
      if (!rowPrim[0][1]?.value || rowPrim[0][1]?.value === "") {
        return "не участва в изчисленията";
      }
      const thickness = rowPrim[0][1].value;
      const conductivity = rowPrim[0][3].value;

      return Number((thickness / 100 / conductivity).toFixed(5));
    };
    const calcTotalLayerResistance = (rows) => {
      let totalResistance = 0;
      for (let i = 0; i < rows.length; i++) {
        const layerResistane = calcThermalConductivity(rows[i]);
        if (
          layerResistane !== null &&
          layerResistane !== "не участва в изчисленията"
        ) {
          totalResistance += layerResistane;
        }
      }
      return Number(totalResistance.toFixed(5));
    };
    const calcU1 = () => {
      const Rsi1 = additionalData[0][0].value;
      const Rse1 = additionalData[0][2].value;
      const U1 =
        1 /
        (Rsi1 +
          calcTotalLayerResistance(totalConstructiveResistanceForU1) +
          Rse1);
      return Number(U1.toFixed(2));
    };
    const calcU2 = () => {
      const Rsi2 = additionalData[0][1].value;
      const Rse2 = additionalData[0][3].value;
      const U2 =
        1 /
        (Rsi2 +
          calcTotalLayerResistance(totalConstructiveResistanceForU2) +
          Rse2);

      return Number(U2.toFixed(2));
    };
    const calcU1andU2FirstStep = () => {
      const actualConditionData = Object.values(additionalData.data[0])[0];

      const A1 = actualConditionData[1]?.value || 0;
      const A2 = actualConditionData[3]?.value || 0;
      const Aw = actualConditionData[5]?.value || 0;
      const Uw = actualConditionData[6]?.value || 0;
      const n = actualConditionData[7]?.value || 0;
      const h = actualConditionData[8]?.value || 0;
      const V = Number(A1 * h).toFixed(2);

      const helperTableData = cleanRows[0][0];
      const Rsi1 = helperTableData[0].value;
      const Rse2 = helperTableData[3].value;
      // const Rsiw = helperTableData[4].value;
      // const Rsew = helperTableData[5].value;
      const θi = helperTableData[6].value;
      const θe = helperTableData[7].value;
      // const θu = helperTableData[8].value;
      // const θse1 = helperTableData[9].value;
      // const θsi2 = helperTableData[10].value;
      const Pr = helperTableData[11].value;
      const v = helperTableData[12].value;
      const λ = helperTableData[13].value;
      const g = helperTableData[14].value;
      // const β = helperTableData[15].value;
      // const Gr = helperTableData[16].value;
      const λекв = helperTableData[17].value;
      // const δвс = helperTableData[18].value;
      // const εк = helperTableData[19].value;

      let dummyRse1 = 0.1;
      let dummyRsi2 = 0.17;

      const dummyU1 =
        1 /
        (Rsi1 +
          calcTotalLayerResistance(totalConstructiveResistanceForU1) +
          dummyRse1);
      const dummyU2 =
        1 /
        (dummyRsi2 +
          calcTotalLayerResistance(totalConstructiveResistanceForU2) +
          Rse2);

      const θu = calcθu();

      // const Pr = 0.7054;
      // const v = 13.984 * 10 ** -6;
      // const λ = Number((2.496 * (10 ** -2)).toFixed(3));

      const θse1 = calcθse1();
      const θsi2 = calcθsi2();

      const β = 1 / (θu + 273.15);
      const δвс = calcδвс();

      const Gr = (g * β * δвс ** 3 * (θse1 - θsi2)) / v ** 2; // θse1
      let εк;

      if (Gr * Pr < 1000) {
        εк = 1;
      } else if (Gr * Pr > 1000 && Gr * Pr < 1000000) {
        εк = 0.105 * (Gr * Pr) ** 0.3;
      } else if (Gr * Pr > 1000000 && Gr * Pr < 10000000000) {
        εк = 0.4 * (Gr * Pr) ** 0.25;
      }

      const actualRse1Rsi2 = δвс / (2 * λекв);

      return Number(actualRse1Rsi2.toFixed(6));
    };
    const calcθse1 = () => {
      const actualConditionData = Object.values(additionalData.data[0])[0];

      const A1 = actualConditionData[1]?.value || 0;
      const A2 = actualConditionData[3]?.value || 0;
      const Aw = actualConditionData[5]?.value || 0;
      const Uw = actualConditionData[6]?.value || 0;
      const n = actualConditionData[7]?.value || 0;
      const h = actualConditionData[8]?.value || 0;
      const V = Number(A1 * h).toFixed(2);

      const helperTableData = cleanRows[0][0];
      const Rsi1 = helperTableData[0]?.value || 0;
      const Rse2 = helperTableData[3]?.value || 0;
      // const Rsiw = helperTableData[4].value;
      // const Rsew = helperTableData[5].value;
      const θi = helperTableData[6]?.value || 0;
      const θe = helperTableData[7]?.value || 0;
      // const θu = helperTableData[8].value;
      // const θse1 = helperTableData[9].value;
      // const θsi2 = helperTableData[10].value;
      const Pr = helperTableData[11]?.value || 0;
      const v = helperTableData[12]?.value || 0;
      const λ = helperTableData[13]?.value || 0;
      const g = helperTableData[14]?.value || 0;
      // const β = helperTableData[15].value;
      // const Gr = helperTableData[16].value;
      const λекв = helperTableData[17]?.value || 0;
      // const δвс = helperTableData[18].value;
      // const εк = helperTableData[19].value;

      let dummyRse1 = 0.1;
      let dummyRsi2 = 0.17;

      const dummyU1 =
        1 /
        (Rsi1 +
          calcTotalLayerResistance(totalConstructiveResistanceForU1) +
          dummyRse1);
      const dummyU2 =
        1 /
        (dummyRsi2 +
          calcTotalLayerResistance(totalConstructiveResistanceForU2) +
          Rse2);

      const θu =
        (θi * dummyU1 * A1 +
          θe * dummyU2 * A2 +
          θe * Uw * Aw +
          θe * 0.33 * n * V) /
        (dummyU1 * A1 + dummyU2 * A2 + Uw * Aw + 0.33 * n * V);

      // const Pr = 0.7054;
      // const v = 13.984 * 10 ** -6;
      // const λ = Number((2.496 * (10 ** -2)).toFixed(3));

      const θse1 = θu + dummyRse1 * dummyU1 * (θi - θu);
      return Number(θse1.toFixed(2));
    };
    const calcθsi2 = () => {
      const helperTableData = cleanRows[0][0];
      const Rse2 = helperTableData[3].value;
      const θe = helperTableData[7].value;

      let dummyRsi2 = 0.17;

      const dummyU2 =
        1 /
        (dummyRsi2 +
          calcTotalLayerResistance(totalConstructiveResistanceForU2) +
          Rse2);

      const θu = calcθu();
      const θsi2 = θu - dummyRsi2 * dummyU2 * (θu - θe);

      return Number(θsi2.toFixed(2));
    };
    const calcδвс = () => {
      const actualConditionData = Object.values(additionalData.data[0])[0];
      const A1 = actualConditionData[1].value;
      const h = actualConditionData[8].value;

      const δвс = (A1 * h) / A1;

      return Number(δвс.toFixed(2));
    };
    const calcθu = () => {
      const actualConditionData = Object.values(additionalData.data[0])[0];

      const A1 = actualConditionData[1]?.value || 0;
      const A2 = actualConditionData[3]?.value || 0;
      const Aw = actualConditionData[5]?.value || 0;
      const Uw = actualConditionData[6]?.value || 0;
      const n = actualConditionData[7]?.value || 0;
      const h = actualConditionData[8]?.value || 0;
      const V = Number(A1 * h).toFixed(2);

      const helperTableData = cleanRows[0][0];
      const Rsi1 = helperTableData[0].value;
      const Rse2 = helperTableData[3].value;
      const θi = helperTableData[6].value;
      const θe = helperTableData[7].value;

      let dummyRse1 = 0.1;
      let dummyRsi2 = 0.17;

      const dummyU1 =
        1 /
        (Rsi1 +
          calcTotalLayerResistance(totalConstructiveResistanceForU1) +
          dummyRse1);
      const dummyU2 =
        1 /
        (dummyRsi2 +
          calcTotalLayerResistance(totalConstructiveResistanceForU2) +
          Rse2);

      const θu =
        (θi * dummyU1 * A1 +
          θe * dummyU2 * A2 +
          θe * Uw * Aw +
          θe * 0.33 * n * V) /
        (dummyU1 * A1 + dummyU2 * A2 + Uw * Aw + 0.33 * n * V);

      return Number(θu.toFixed(2));
    };
    const calcβ = () => {
      const β = 1 / (calcθu() + 273.15);

      return Number(β.toFixed(6));
    };

    switch (formula) {
      case "calcVolume":
        return calcVolume();
      case "calcActualHeathTransferCoefficient":
        return calcActualHeathTransferCoefficient();
      case "calcActualHeathTransferCoefficient2":
        return calcActualHeathTransferCoefficient2();
      case "calcThermalConductivity":
        return calcThermalConductivity(rowPrim);
      case "calcTotalLayerResistance":
        return calcTotalLayerResistance(cleanRows);
      case "calcU1":
        return calcU1();
      case "calcU2":
        return calcU2();
      case "calcU1andU2FirstStep":
        return calcU1andU2FirstStep();
      case "calcθse1":
        return calcθse1();
      case "calcδвс":
        return calcδвс();
      case "calcθu":
        return calcθu();
      case "calcθsi2":
        return calcθsi2();
      case "calcβ":
        return calcβ();
      default:
        break;
    }
  };
