import Table from "../../Table/Table";
import { actualConditionFormulas } from "../../../utils/formulas/Roof";

const RoofConstruction = ({ heading, header, data,tableIndex }) => {
  return (
    <Table
      header={header}
      rows={data}
      calculateFormula={actualConditionFormulas()}
      heading={heading}
      tableSlice={"roof"}
      tableIndex={tableIndex}
    />
  );
};

export default RoofConstruction;
