import Table from "../../Table/Table";
import { actualConditionFormulas } from "../../../utils/formulas/Floor";
import { useSelector } from "react-redux";

const FloorCalculation = ({ data, header, heading, tableIndex }) => {
  const floorData = useSelector((state) => {
    return state?.tables.floor || [];
  });

  return (
    <Table
      header={header}
      rows={data}
      heading={heading}
      calculateFormula={actualConditionFormulas(floorData)}
      tableSlice={"floor"}
      tableIndex={tableIndex}
    />
  );
};

export { FloorCalculation };
