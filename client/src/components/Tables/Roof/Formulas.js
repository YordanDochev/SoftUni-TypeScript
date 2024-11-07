// Attic Ceiling with Clearance Greater than 30 cm

// Uекв = actualHeathTransferCoefficient; | formula
// A1 = loftSlabAreaAboveHeatedFloor;     | input
// A2 = roofArea;                         | input
// U1 = loftSlabHeathTransferCoefficient; | formula
// U2 = roofHeathTransferCoefficient;     | formula
// Aw = wallArea;                         | input
// Uw = wallHeathTransferCoefficient;     | formula
// n = airExchangeCoefficient;            | input
// V = atticVolume;                       | formula
// h = atticAirLayerHeight;               | input
// Rsi1 = internalLayerOneResistance;     | input ? 0.1  ?
// Rsi2 = internalLayerTwoResistance;     | formula
// Rse1 = externalLayerOneResistance;     | formula
// Rse2 = externalLayerTwoResistance;     | input ? 0.04 ?
// Rsiw = internalWallResistance;         | formula
// Rsew = externalWallResistance;         | formula
// θi = averageTempInTheBuilding;         | input
// θe = averageOutsideTempHeatingSeason;  | input
// θu = averageLoftSlabTemp;              | formula
// θse1 = averageAtticSurfaceTemp;        | formula
// θsi2 = averageRoofSurfaceTemp;         | formula
// Pr = prandtlNumber;                    | data sheet ?
// v = kinematicViscosityOfAir;           | data sheet ?
// λ = thermalConductivityOfAir;          | data sheet ?
// g = accelerationDueToGravity;          | constant
// β = volumeExpansionCoefficient;        | formula
// Gr = grashofNumber;                    | formula
// λекв = equivalentThermalConductivity;  | formula
// δвс = airLayerHeight;                  | formula
// εк = corrеctionalCoefficient;          | formula

// Uекв = 1 / (1 / U1 + A1 / (A2 * U2 + Aw * Uw + 0.33 * n * V));
// V = A1 * h;
// U1 = 1 / (Rsi1 + constructiveLayersTotalResistance + Rse1);
// U2 = 1 / (Rsi2 + constructiveLayersTotalResistance + Rse2);
// Uw = 1 / (Rsiw + constructiveLayersTotalResistance + Rsew);

// CALCULATING U1 AND U2 IN TWO STEPS:

// FIRST:

// Rse1 = 0.1;
// Rsi2 = 0.17;

// θu =
//   (θi * U1 * A1 + θe * U2 * A2 + θe * Uw * Aw + θe * 0.33 * n * V) /
//   (U1 * A1 + U2 * A2 + Uw * Aw + 0.33 * n * V);
// θse1 = θu + Rse1 * U1 * (θi - θu);
// θsi2 = θu - Rsi2 * U2 * (θu - θe);
// δвс = V / A1;
// Gr = (g * β * δвс) ^ ((3 * (θse1 - θsi2)) / v2);
// εк = 1 || (0.105 * (Gr * Pr)) ^ 0.3 || (0.4 * (Gr * Pr)) ^ 0.25; // depending on Gr * Pr;
// λекв = λ * εк;
// Rse1 = Rsi2 = (δвс / 2) * λекв;

// SECOND:

// Calculate U1 and U2 again with the new values...

// Ceiling Adjacent to External Air
// RT2 = roofThermalResistance;    | formula
// UT2 = roofThermalTransmittance; | formula

// RT2 = 0.1 + constructiveLayersTotalResistance + 0.04;
// UT2 = 1 / RT2; // ===> This is Uекв.
