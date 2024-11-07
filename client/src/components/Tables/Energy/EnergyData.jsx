import React from "react";
import Table from "../../Table/Table";
import { calculateEnergy } from "../../../utils/formulas/Energy";
import { createEnergyDataObject } from "./createEnergyDataObject";

const EnergyData = ({ data, header, heading, tableIndex }) => {
  return (
    <Table
      heading={heading}
      header={header}
      rows={data}
      tableSlice="energy"
      tableIndex={tableIndex}
      calculateFormula={calculateEnergy}
      config={{
        createObjectFormula: createEnergyDataObject,
        showDeleteButton: true,
      }}
    />
  );
};

export { EnergyData };
