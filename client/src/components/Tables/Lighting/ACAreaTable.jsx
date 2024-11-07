import React from "react";
import Table from "../../Table/Table";

const ACAreaTable = ({ rows, heading, header, index, calculateFormula }) => {
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

export { ACAreaTable };
