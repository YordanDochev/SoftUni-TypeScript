import React from "react";
import { EnergyCalculations } from "./EnergyCalculations";
import { EnergyData } from "./EnergyData";
import styles from "./Energy.module.css";
import { AddTable } from "../../AddTable/AddTable";
import { ENERGY_CALCULATIONS_ADD_TEABLE, ENERGY_FUEL_ADD_TEABLE } from "../../../app/mock/tables/tables.mock";

const tableMap = {
  "Изчисления": ENERGY_CALCULATIONS_ADD_TEABLE,
  "Енергично гориво": ENERGY_FUEL_ADD_TEABLE
}

const Energy = ({ tables }) => {
  if (!tables) {
    return null;
  }

  return (
    <div>
      <AddTable tableSlice="energy" tables={tables} tableMap = {tableMap}/>
      {tables.map((table, index) => (
        <div key={`${table.heading}-${index}`} className={styles.table}>
          <>
            {/* Render the table based on its type */}
            {table.type === "EnergyCalculations" ? (
              <EnergyCalculations
                key={index}
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
              />
            ) : (
              <EnergyData
                key={index}
                data={table.data}
                heading={table.heading}
                header={table.header}
                tableIndex={index}
              />
            )}
          </>
        </div>
      ))}
    </div>
  );
};

export { Energy };
