import React, { useState } from "react";
import Table from "../../Table/Table";

const ClimaticZones = ({ data, header, heading, tableIndex }) => {
  const [showSpecificRows, setShowSpecificRows] = useState(false); // State to toggle specific rows

  const findSpecificRows = () => {
    const specificProperties = [
      "data_dengradusi",
      "data_startHeating",
      "data_endHeating",
      "data_temperature",
    ];

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
        tableSlice={"zones"}
        tableIndex={tableIndex}
        config={{
          addRowOptions: {
            position: data.length - 4, // Insert the row just above the last three rows
            keyCoeff: 4,
          },
          specificRows, // Pass specific rows to the Table component
          showSpecificRows: showSpecificRows, // Pass toggle state
          showDeleteButton: true
        }}
      />

      {/* Toggle button */}
      {specificRows.length > 0 && (
        <button
          className="m-2 bg-white hover:bg-red-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
          style={{display:'block',margin:'15px 0px'}}
          onClick={() => setShowSpecificRows(!showSpecificRows)}
        >
          {showSpecificRows
            ? "↑  Скрий последните редове"
            : "↓  Покажи последните редове"}
        </button>
      )}
    </>
  );
};

export { ClimaticZones };
