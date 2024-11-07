import React, { useState } from "react";
import Table from "../../Table/Table";
import { outsideConditionFormulas } from "../../../utils/formulas/Walls";
import { createWallObject } from "./createWallObject";
import { useSelector } from "react-redux";

const OutsideWall = ({ data, header, heading, tableIndex }) => {
  const [showSpecificRows, setShowSpecificRows] = useState(true); // State to toggle specific rows

  const wallsData = useSelector((state) => {
    return state?.tables.walls[tableIndex].data || {};
  });

  const findSpecificRows = () => {
    const specificProperties = ["data_Rs", "data_Rsi", "data_m2K"];

    return data.filter((row, rowIndex) => {
      const rowKey = Object.keys(row)[0];
      return specificProperties.includes(rowKey);
    });
  };

  const specificRows = findSpecificRows();

  return (
    <>
      <Table
        header={header}
        heading={heading}
        rows={data}
        calculateFormula={outsideConditionFormulas(wallsData)}
        tableSlice={"walls"}
        tableIndex={tableIndex}
        config={{
          createObjectFormula:createWallObject,
          addRowOptions: {
            position: data.length - 3, // Insert the row just above the last three rows
            keyCoeff: 3,
          },
          createObjectFormula:createWallObject,
          specificRows, // Pass specific rows to the Table component
          showSpecificRows, // Pass toggle state
          showDeleteButton: true,
        }}
      />

      {/* Toggle button */}
      {/* {specificRows.length > 0 && (
        <button
          className={""}
          onClick={() => setShowSpecificRows(!showSpecificRows)}
        >
          {showSpecificRows
            ? "Скрий последните редове"
            : "Покажи последните редове"}
        </button>
      )} */}
    </>
  );
};

export { OutsideWall };
