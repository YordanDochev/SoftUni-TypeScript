import React from "react";
import Table from "../../Table/Table";

const ConstructionAndEnergyEfficiencyTable = ({
  index,
  rows,
  heading,
  header,
  calculateFormula,
}) => {
  return (
    <Table
      rows={rows}
      header={header}
      heading={heading}
      tableSlice="lighting"
      tableIndex={index}
      calculateFormula={calculateFormula}
    />
  );
};

export { ConstructionAndEnergyEfficiencyTable };
