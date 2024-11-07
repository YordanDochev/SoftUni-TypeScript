import React from "react";
import Table from "../../Table/Table";
import { ClimaticZones } from "./ClimaticZones";

const Zones = ({ tables }) => {

  if (!tables) {
    return null;
  }

  return (
    <div>
      {tables.map((table, index) => (
        <div key={`${table.heading}-${index}`} className={""}>
          <>
            {/* Render the table based on its type */}
            {table.type === "PopulatedAreas" ? (
              <div>
                <h1>Таблица {index + 1}</h1>
                <Table
                  heading={table.heading}
                  header={table.header}
                  rows={table.data}
                  tableSlice="zones"
                  tableIndex={index}
                  config={{
                    showDeleteButton: true
                  }}
                />
              </div>
            ) : (
              <div>
                <h1>Климатична зона {index}</h1>
                <ClimaticZones
                  data={table.data}
                  heading={table.heading}
                  header={table.header}
                  tableIndex={index}
                  key={index}
                />
              </div>
            )}
          </>
        </div>
      ))}
    </div>
  );

};

export { Zones };
