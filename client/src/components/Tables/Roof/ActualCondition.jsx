import Table from "../../Table/Table";
import { actualConditionFormulas } from "../../../utils/formulas/Roof";
import { useSelector } from "react-redux";

const ActualCondition = ({ heading, header, data,tableIndex }) => {

  const roofData = useSelector((state) => {
    return state?.tables.roof || {};
  });

  const helperTableData = Object.values(roofData[4].data[0]);
  const totalConstructiveResistance = Object.values(roofData[1].data).map(
    (x) => Object.values(x)
  );
  const totalConstructiveResistanceForU1 = Object.values(roofData[2].data).map(
    (x) => Object.values(x)
  );
  const totalConstructiveResistanceForU2 = Object.values(roofData[3].data).map(
    (x) => Object.values(x)
  );

  return (
    <Table
      header={header}
      rows={data}
      heading={heading}
      calculateFormula={actualConditionFormulas(
        helperTableData,
        totalConstructiveResistanceForU1,
        totalConstructiveResistanceForU2,
        totalConstructiveResistance
      )}
      tableSlice={"roof"}
      tableIndex={tableIndex}
    />
  );
};

export default ActualCondition;
