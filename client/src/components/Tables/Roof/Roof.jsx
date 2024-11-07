import ActualCondition from "./ActualCondition";
import RoofConstruction from "./RoofConstruction";
import HelperTable from "./HelperTable";
import { DescriptionConstructionWorks } from "../DescriptionConstructionWorks/DescriptionConstructionWorks";
import { CalculationConstructionWorks } from "../CalculationConstructionWorks/CalculationConstructionWorks";
const Roof = ({ tables }) => {
  return (
    <div>
      {tables.map((table, index) => (
        <div key={`${table.heading}-${index}`} className={""}>
          <>
          
            {/* Render the table based on its type */}
            {table.type === "actualCondition" && (
              <>
                <ActualCondition
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                />
              </>
            )}
            {table.type === "calculationRoof" && (
              <RoofConstruction
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
              />
            )}
            {table.type === "tablesHelper" && (
              <HelperTable
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
              />
            )}
            {table.type === "constructionWorks" && (
              <>
                <DescriptionConstructionWorks
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  tableSlice={'roof'}
                />
              </>
            )}
            {table.type === "Calculations" && (
              <CalculationConstructionWorks
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
                tableSlice={'roof'}
              />
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export { Roof };
