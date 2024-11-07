import React from "react";
import { ConsumatorTable } from "./ConsumatorTable";
import { ACAreaTable } from "./ACAreaTable";
import { SimPowOpModeTable } from "./SimPowOpModeTable";
import { ConstructionAndEnergyEfficiencyTable } from "./ConstructionAndEnergyEfficiencyTable";
import { ConstructionAndEnergyEfficiencySubTable } from "./ConstructionAndEnergyEfficiencySubTable";

import {
  lightingFormulas,
  lightingTotalsConfig,
} from "../../../utils/formulas/Lighting";

const Lighting = ({ tables }) => {
  return (
    <div>
      {tables?.map((table, index) =>
        table.type === "Consumator" ? (
          <ConsumatorTable
            key={`${table.heading}-${index}`}
            rows={table.data}
            index={index}
            heading={table.heading}
            header={table.header}
            calculateFormula={lightingFormulas()}
            totalsConfig={lightingTotalsConfig}
          />
        ) : table.type === "ACArea" ? (
          <ACAreaTable
            key={`${table.heading}-${index}`}
            rows={table.data}
            index={index}
            heading={table.heading}
            header={table.header}
            calculateFormula={lightingFormulas()}
          />
        ) : table.type === "ConAndEnEff" ? (
          <ConstructionAndEnergyEfficiencyTable
            key={`${table.heading}-${index}`}
            rows={table.data}
            index={index}
            heading={table.heading}
            header={table.header}
            calculateFormula={lightingFormulas(tables, index)}
          />
        ) : table.type === "SimPowOpMode" ? (
          <SimPowOpModeTable
            rows={table.data}
            key={`${table.heading}-${index}`}
            index={index}
            heading={table.heading}
            header={table.header}
            acAreaValue={28050.6}
            workingPower={table.workingPower}
            coeff={table.coeff}
            calculateFormula={lightingFormulas(tables, index)}
          />
        ) : table.type === "ConAndEnEffSub" ? (
          <ConstructionAndEnergyEfficiencySubTable
            rows={table.data}
            key={`${table.heading}-${index}`}
            index={index}
            heading={table.heading}
            header={table.header}
            calculateFormula={lightingFormulas(tables, index)}
          />
        ) : (
          <tr></tr>
        )
      )}
    </div>
  );
};

export { Lighting };
