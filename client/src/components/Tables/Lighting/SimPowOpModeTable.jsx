import React from "react";
import Table from "../../Table/Table";

const SimPowOpModeTable = ({
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

export { SimPowOpModeTable };
