// // MVP => actualHeathTransferCoefficient;

// const roofFormula = {
//   calcVolume: (rows) => {
//     const loftSlabAreaAboveHeatedFloor = rows[0][1].value; // A1
//     const atticAirLayerHeight = rows[0][8].value; // h
//     return Number(
//       (loftSlabAreaAboveHeatedFloor * atticAirLayerHeight).toFixed(2)
//     );
//   },
//   calcActualHeathTransferCoefficient: (rows) => {
//     const loftSlabAreaAboveHeatedFloor = rows[0][1].value; // A1
//     const loftSlabHeathTransferCoefficient = rows[0][2].value; // U1
//     const roofArea = rows[0][3].value; // A2
//     const roofHeathTransferCoefficient = rows[0][4].value; // U2
//     const wallArea = rows[0][5].value; // Aw
//     const wallHeathTransferCoefficient = rows[0][6].value; // Uw
//     const airExchangeCoefficient = rows[0][7].value; // n
//     const atticVolume = roofFormula.calcVolume(rows); // V

//     return Number(
//       (
//         1 /
//         (1 / loftSlabHeathTransferCoefficient +
//           loftSlabAreaAboveHeatedFloor /
//             (roofArea * roofHeathTransferCoefficient +
//               wallArea * wallHeathTransferCoefficient +
//               0.33 * airExchangeCoefficient * atticVolume))
//       ).toFixed(3)
//     );
//   },
//   calcThermalConductivity: (_, row) => {
//     if (row[1].value === "") {
//       return null;
//     }
//     const thickness = row[1].value;
//     const conductivity = row[3].value;

//     return Number((thickness / 100 / conductivity).toFixed(5));
//   },
//   calcTotalLayerResistance: (rows) => {
//     let totalResistance = 0;
//     for (let i = 0; i < rows.length; i++) {
//       const layerResistane = roofFormula.calcThermalConductivity(null, rows[i]);
//       if (layerResistane !== null) {
//         totalResistance += layerResistane;
//       }
//     }

//     return Number(totalResistance.toFixed(5));
//   },
//   calcU1andU2FirstStep: (Rsi1, Rse2, θi, θe, A1, A2, Aw, Uw, n, V, rows) => {
//     let dummyRse1 = 0.1;
//     let dummyRsi2 = 0.17;

//     const dummyU1 =
//       1 / (Rsi1 + roofFormula.calcTotalLayerResistance(rows) + dummyRse1);
//     const dummyU2 =
//       1 / (dummyRsi2 + roofFormula.calcTotalLayerResistance(rows) + Rse2);

//     const θu =
//       (θi * dummyU1 * A1 +
//         θe * dummyU2 * A2 +
//         θe * Uw * Aw +
//         θe * 0.33 * n * V) /
//       (dummyU1 * A1 + dummyU2 * A2 + Uw * Aw + 0.33 * n * V);

//     const Pr = 0.7054;
//     const v = 13.984 * 10 ** 6;
//     const λ = 2.496 * 10 ** 2;

//     const θse1 = θu + dummyRse1 * dummyU1 * (θi - θu);
//     const θsi2 = θu + dummyRsi2 * dummyU2 * (θu - θe);

//     const g = 9.81;
//     const β = 1 / (θu - 273.15);
//     const δвс = V / A1;

//     const Gr = (g * β * δвс ** 3 * (θse1 - θsi2)) / v ** 2;

//     let εк;

//     if (Gr * Pr < 1000) {
//       εк = 1;
//     } else if (Gr * Pr > 1000 && Gr * Pr < 1000000) {
//       εк = 0.105 * (Gr * Pr) ** 0.3;
//     } else if (Gr * Pr > 1000000 && Gr * Pr < 10000000000) {
//       εк = 0.4 * (Gr * Pr) ** 0.25;
//     }

//     const λекв = λ * εк;
//     const actualRse1Rsi2 = δвс / (2 * λекв);

//     return actualRse1Rsi2;
//   },
//   calcU1andU2SecondStep: (Rsi1, Rse2, θi, θe, A1, A2, Aw, Uw, n, V, rows) => {
//     const Rse1 = roofFormula.calcU1andU2FirstStep(
//       Rsi1,
//       Rse2,
//       θi,
//       θe,
//       A1,
//       A2,
//       Aw,
//       Uw,
//       n,
//       V,
//       rows
//     );
//     const Rsi2 = roofFormula.calcU1andU2FirstStep(
//       Rsi1,
//       Rse2,
//       θi,
//       θe,
//       A1,
//       A2,
//       Aw,
//       Uw,
//       n,
//       V,
//       rows
//     );

//     const U1 = 1 / (Rsi1 + roofFormula.calcTotalLayerResistance(rows) + Rse1);
//     const U2 = 1 / (Rsi2 + roofFormula.calcTotalLayerResistance(rows) + Rse2);

//     return { U1, U2 };
//   },
// };

// export default roofFormula;
