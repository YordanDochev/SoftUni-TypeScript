import React from "react";
import Table from "../../Table/Table";
import {
  calculateWindows,
  windowsTotalsConfig,
} from "../../../utils/formulas/Windows";
import { AddTable } from "../../AddTable/AddTable";
import { DescriptionConstructionWorks } from "../DescriptionConstructionWorks/DescriptionConstructionWorks";
import { CalculationConstructionWorks } from "../CalculationConstructionWorks/CalculationConstructionWorks";
import { WINDOW_ADD_TEABLE } from "../../../app/mock/tables/tables.mock";
import { createWindowObject } from "./createWindowObject";

const tableMap = {
  "Опис на прозорците": WINDOW_ADD_TEABLE,
};

const mergeCells = [
  { s: { r: 0, c: 0 }, e: { r: 1, c: 5 } },
  { s: { r: 0, c: 6 }, e: { r: 0, c: 13 } },
  { s: { r: 0, c: 14 }, e: { r: 2, c: 14 } },
  { s: { r: 1, c: 6 }, e: { r: 1, c: 7 } },
  { s: { r: 1, c: 8 }, e: { r: 1, c: 9 } },
  { s: { r: 1, c: 10 }, e: { r: 1, c: 11 } },
  { s: { r: 1, c: 12 }, e: { r: 1, c: 13 } },
];

const Windows = ({ tables }) => {
  if (!tables) {
    return null;
  }

  // TODO: Implement the visibility of tables in new design
  // const toggleTableVisibility = (index) => {
  //   setVisibleTables((prev) =>
  //     prev.map((isVisible, i) => (i === index ? !isVisible : isVisible))
  //   );
  // };

  return (
    <>
      {tables.map((table, index) => (
        <div key={`${table?.heading}-${index}`} className={""}>
          <>
            {table.type === "windowDescription" && (
              <>
                <Table
                  heading={table.heading}
                  header={table.header}
                  rows={table.data}
                  tableSlice="windows"
                  tableIndex={index}
                  calculateFormula={calculateWindows}
                  config={{
                    showDeleteButton: true,
                    mergeCells,
                    showTotals: true,
                    totalsConfig: windowsTotalsConfig,
                  }}
                />

                <AddTable
                  tableSlice="windows"
                  tables={tables}
                  tableMap={tableMap}
                />
              </>
            )}
            {table.type === "constructionWorks" && (
              <>
                <DescriptionConstructionWorks
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  tableSlice={"windows"}
                />
              </>
            )}
            {table.type === "Calculations" && (
              <CalculationConstructionWorks
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
                tableSlice={"windows"}
              />
            )}
          </>
        </div>
      ))}
    </>
  );
};

export { Windows };
