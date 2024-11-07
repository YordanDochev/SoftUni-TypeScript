import React from "react";
import Table from "../../Table/Table";
import { actualConditionFormulas } from "../../../utils/formulas/Walls";
import { useSelector } from "react-redux";

const ActualCondition = ({ data, header, heading, tableIndex }) => {
  const wallsData = useSelector((state) => {
    return state?.tables.walls || {};
  });  

  const windowData = useSelector((state) => {
    return state?.tables.windows[0].data || {};
  });

  return (
    <Table
      header={header}
      rows={data}
      heading={heading}
      calculateFormula={actualConditionFormulas(wallsData, windowData)}
      tableSlice={"walls"}
      tableIndex={tableIndex}
    />
  );
};

export { ActualCondition };
