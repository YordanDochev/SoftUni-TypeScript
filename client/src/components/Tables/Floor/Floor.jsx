import Table from "../../Table/Table";
import { CalculationConstructionWorks } from "../CalculationConstructionWorks/CalculationConstructionWorks";
import { DescriptionConstructionWorks } from "../DescriptionConstructionWorks/DescriptionConstructionWorks";
import { FloorCalculation } from "./FloorCalculation";
// import { AddTable } from "../../AddTable/AddTable";

const Floor = ({ tables }) => {
  if (!tables) {
    return null;
  }
  return (
    <div>
      {tables.map((table, index) => (
        <div key={`${table.heading}-${index}`} className={""}>
          <>
            {table.type === "actualCondition" && (
                <Table
                  rows={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  tableSlice={"floor"}
                  key={index}
                />
            )}
            {table.type === "floorCalculation" && (
              <FloorCalculation
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
              />
            )}
            {table.type === "constructionWorks" && (
                <DescriptionConstructionWorks
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  tableSlice={'floor'}
                />
            )}
            {table.type === "Calculations" && (
              <CalculationConstructionWorks
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
                tableSlice={'floor'}
              />
            )}

          </>
        </div>
      ))}
    </div>
  );
};

export { Floor };
