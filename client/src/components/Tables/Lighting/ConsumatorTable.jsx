import React from "react";
import Table from "../../Table/Table";

const ConsumatorTable = ({
  index,
  rows,
  heading,
  header,
  calculateFormula,
  totalsConfig,
}) => {
  return (
    <div className="w-full">
      <Table
        rows={rows}
        header={header}
        heading={heading}
        tableSlice="lighting"
        tableIndex={index}
        config={{
          showTotals: true,
          totalsConfig,
        }}
        calculateFormula={calculateFormula}
      />
    </div>
  );
};

export { ConsumatorTable };
