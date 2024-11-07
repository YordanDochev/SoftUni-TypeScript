import React from "react";
import { ActualCondition } from "./ActualCondition";
import { OutsideWall } from "./OutsideWall";
import { AddTable } from "../../AddTable/AddTable";
import { DescriptionConstructionWorks } from "../DescriptionConstructionWorks/DescriptionConstructionWorks";
import { CalculationConstructionWorks } from "../CalculationConstructionWorks/CalculationConstructionWorks";
import { WALLS_ACTUAL_CONDITION_ADD_TEABLE, WALLS_ADD_TEABLE } from "../../../app/mock/tables/tables.mock";

const tableMap = {
  "Външна Стена": WALLS_ADD_TEABLE,
  "Актуално състояние": WALLS_ACTUAL_CONDITION_ADD_TEABLE
}

const Walls = ({ tables }) => {
  if (!tables) {
    return null;
  }

  return (
    <div>
      <AddTable tableSlice="walls" tables={tables} tableMap = {tableMap}/>
      {tables.map((table, index) => (
        <div key={`${table.heading}-${index}`} className={""}>
          <>
          
            {/* Render the table based on its type */}
            {table.type === "OutterWall" && (
              <>
                <OutsideWall
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  key={index}
                />
              </>
            )}
            {table.type === "ActualCondition" && (
              <ActualCondition
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
                key={index}
              />
            )}
            {table.type === "constructionWorks" && (
              <>
                <DescriptionConstructionWorks
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  tableSlice={'walls'}
                />
              </>
            )}
            {table.type === "Calculations" && (
              <CalculationConstructionWorks
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
                tableSlice={'walls'}
              />
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export { Walls };
