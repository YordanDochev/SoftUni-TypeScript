import Table from "../../Table/Table";
import { actualConditionFormulas } from "../../../utils/formulas/Roof";
import { useSelector } from "react-redux";

const HelperTable = ({ header, heading, data,tableIndex }) => {

   const roofData = useSelector((state) => {
    return state?.tables.roof || {};
  });

  const actualConditionRoof = roofData.filter((table)=> table.type === "actualCondition")
  
  // const extractedRoofValues = (Object.values(roofData[0].data[0])[0].map((x, i) => {
  //   if(i === 0) {
  //     return;
  //   }

  //   return x.value;
  // })).splice(1);

  const totalConstructiveResistanceForU1 = Object.values(roofData[1].data).map((x) => Object.values(x));
  const totalConstructiveResistanceForU2 = Object.values(roofData[2].data).map((x) => Object.values(x));

  return (
    <Table
      header={header}
      rows={data}
      heading={heading}
      calculateFormula={actualConditionFormulas(actualConditionRoof[0], totalConstructiveResistanceForU1, totalConstructiveResistanceForU2)}
      tableSlice={"roof"}
      tableIndex={tableIndex}
    />
  );
};

export default HelperTable;
