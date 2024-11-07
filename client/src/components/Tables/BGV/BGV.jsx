import React from "react";
import { useSelector } from "react-redux";
import { WaterHeatingData } from "./WaterHeatingData";
import { DescriptionOfConstructionAndAssemblyWorks } from "./DescriptionOfConstructionAndAssemblyWorks";
import { MeasuresForTheDHWSystem } from "./MeasuresForTheDHWSystem";
import { DescriptionConstructionWorks } from "../DescriptionConstructionWorks/DescriptionConstructionWorks";
import { CalculationConstructionWorks } from "../CalculationConstructionWorks/CalculationConstructionWorks";

const BGV = ({ tables }) => {
  if (!tables) {
    return null;
  }

  const bgvData = useSelector((state) => {
    return state?.tables.bgv || {};
  });

  return (
    <div>
      {tables.map(({ data, header, heading, type }, index) =>
        type === "WaterHeatingData" ? (
          <WaterHeatingData
            data={data}
            heading={heading}
            header={header}
            tableIndex={index}
          />
        ) : type === "constructionWorks" ? (
          <DescriptionConstructionWorks
            data={data}
            heading={heading}
            header={header}
            tableIndex={index}
            tableSlice={'bgv'}
          />
        ) : type === "Calculations" ? (
          <CalculationConstructionWorks
            data={data}
            heading={heading}
            header={header}
            tableIndex={index}
            tableSlice={'bgv'}
          />
        ) : (
          <div></div>
        )
      )}
    </div>
  );
};

export { BGV };
