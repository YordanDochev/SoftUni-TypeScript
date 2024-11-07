import React from "react";
import Table from "../../Table/Table";
import { actualEnergyFormulas } from "../../../utils/formulas/Energy";
import { useSelector } from "react-redux";
import { createEnergyCalculationsObject } from "./createEnergyCalculationsObject";

const EnergyCalculations = ({ data, header, heading, tableIndex }) => {
  const energyData = useSelector((state) => {
    return state?.tables.energy || {};
  });
  return (
    <Table
      header={header}
      rows={data}
      heading={heading}
      calculateFormula={actualEnergyFormulas(energyData)}
      tableSlice={"energy"}
      tableIndex={tableIndex}
      config={{
        createObjectFormula: createEnergyCalculationsObject,
        showDeleteButton: true,
      }}
    />
  );
};

export { EnergyCalculations };
