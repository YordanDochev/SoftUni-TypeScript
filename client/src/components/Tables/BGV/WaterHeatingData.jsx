import React from "react";
import Table from "../../Table/Table";
import { bgvFormulas } from "../../../utils/formulas/BGV";

const WaterHeatingData = ({ data, header, heading, tableIndex }) => {
  return (
    <>
      <h3 className={""}>{heading}</h3>
      <Table
        header={header}
        rows={data}
        calculateFormula={bgvFormulas(data)}
        tableSlice={"bgv"}
        tableIndex={tableIndex}
        config={{
          addRowOptions: {
            position: data.length - 1,
          },
        }}
      />
    </>
  );
};

export { WaterHeatingData };
