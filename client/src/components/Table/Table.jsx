import { useDispatch } from "react-redux";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import {
  updateCell,
  addRow,
  deleteRow,
  deleteTable,
} from "../../app/slices/tablesSlice";
import Cell from "../Cell/Cell";
import { getRowData } from "../../utils/formulas/common";

const Table = ({
  rows = [],
  header,
  heading,
  calculateFormula,
  tableSlice,
  tableIndex,
  config: {
    createObjectFormula, // Function to generate row data
    addRowOptions, // Options for adding rows
    delteTableOptions = {
      countAdidtionTable: 0, // Number of additional tables to delete
    }, // Options configuration for delete table button
    specificRows = [], // Passed specific rows to be toggled
    showSpecificRows = false, // Passed toggle state to control visibility
    showDeleteButton,
    mergeCells = [],
    showTotals = false,
    totalsConfig = {},
    showAddRowButton = true, // Options for visibility of Add row button
    showDeleteTableButton = true, // Options for visibility of Delte table button
  } = {},
}) => {
  const [visibleRowCount, setVisibleRowCount] = useState(20);
  const dispatch = useDispatch();

  const handleAddRow = () => {
    const lastHeaderRow = header.length - 1;
    const emptyRow = header[lastHeaderRow][`header_${lastHeaderRow}`].map(
      (cell) => ({ ...cell, value: "" })
    );

    let row =
      rows.length > 0
        ? getRowData(rows[0]).map((cell) => ({ ...cell, value: "" }))
        : emptyRow;
    if (createObjectFormula) {
      row = createObjectFormula();
    }

    const addRowPayload = {
      table: tableSlice,
      index: tableIndex,
      row,
      position: addRowOptions?.position,
      keyCoeff: addRowOptions?.keyCoeff,
    };

    dispatch(addRow(addRowPayload));
  };

  const handleDelRow = (row) => {
    dispatch(deleteRow({ table: tableSlice, index: tableIndex, row, rows }));
  };

  const handleUpdateCell = (value, row, col) => {
    const currentRow = rows[row];
    if (!currentRow) return; // Ensure currentRow exists
    const key = Object.keys(currentRow)[0]; // Get the key, e.g., "data_0"
    const suffix = key.split("_")[1]; // Get the part after "data_"

    dispatch(
      updateCell({
        table: tableSlice,
        index: tableIndex,
        row,
        suffix,
        col,
        value,
      })
    );
  };

  const handleExport = () => {
    const headerData = header.map((row, rowIndex) => {
      const rowData = getRowData(row);
      return rowData.map((cell, i) =>
        cell?.formula
          ? calculateFormula(row, cell, rowIndex, i, rows)
          : cell.value
      );
    });
    const rowsData = rows.map((row, rowIndex) => {
      const rowData = getRowData(row);
      return rowData.map((cell, i) =>
        cell?.formula
          ? calculateFormula(row, cell, rowIndex, i, rows)
          : cell.value
      );
    });
    const worksheet = XLSX.utils.aoa_to_sheet([...headerData, ...rowsData]);
    const workbook = XLSX.utils.book_new();
    worksheet["!merges"] = mergeCells;
    XLSX.utils.book_append_sheet(workbook, worksheet, heading);
    XLSX.writeFile(workbook, "Calculator.xlsx");
  };

  const handleDeleteData = () => {
    dispatch(
      deleteTable({
        tableSlice,
        index: tableIndex,
        additionalTableDelete: delteTableOptions.countAdidtionTable,
      })
    );
  };

  const getColumnTotal = (colIndex, headerCell) => {
    if (totalsConfig[headerCell?.value] === undefined) {
      return "";
    }

    const { operation, type } = totalsConfig[headerCell?.value];

    const sum = rows.reduce((acc, row, rowIndex) => {
      const rowData = getRowData(row);
      const cell = rowData[colIndex];

      return (
        acc +
        (cell?.value
          ? parseFloat(cell.value)
          : parseFloat(calculateFormula(row, cell, rowIndex, colIndex, rows)) ||
          0)
      );
    }, 0);

    if (operation === "sum") {
      return type === "float" ? sum.toFixed(2) : sum.toFixed(0);
    }

    const average = sum / rows.length;

    if (operation === "average") {
      return type === "float" ? average.toFixed(2) : average.toFixed(0);
    }
  };

  const filteredRows =
    specificRows === undefined
      ? rows
      : rows.filter((row) => {
        const rowKey = Object.keys(row)[0];
        return !specificRows.some(
          (specificRow) => Object.keys(specificRow)[0] === rowKey
        );
      });

  // Slice rows to only show up to visibleRowCount
  const visibleRows = filteredRows.slice(0, visibleRowCount);

  const handleShowMore = () => {
    setVisibleRowCount((prevCount) =>
      Math.min(prevCount + 20, filteredRows.length)
    ); // Increase visible rows by 20, but don't exceed total rows
  };

  const handleHideRows = () => {
    setVisibleRowCount(20); // Reset visible rows to the default count (20)
  };

  return (
    <div className="w-full border rounded-lg text-base">
      <div className="px-4 flex justify-between items-baseline">
        <h1 className="font-bold">{heading}</h1>
        <div className="">
          {showDeleteTableButton && (
            <button
              className="m-2 bg-white hover:bg-red-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
              onClick={handleDeleteData}
            >
              <p>🗑️ Изтрий</p>
            </button>
          )}
          <button
            className="m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
            onClick={handleExport}
          >
            <p>↓↓ Експорт в Ексел</p>
          </button>
          {showAddRowButton && (
            <button
              className="m-4 bg-teal-600 hover:bg-teal-900 text-gray-200 py-2 px-4 text-sm border border-gray-400 rounded shadow"
              onClick={handleAddRow}
            >
              <p>➕ Добави ред</p>
            </button>
          )}
        </div>
      </div>

      <table className="w-full table-auto text-center">
        <thead className="bg-gray-100 border-b border-black-gray-300 bg-blue-gray-200 p-4">
          {header?.map((row, index) => (
            <tr className="border" key={index}>
              {getRowData(row).map((cell, index) => (
                <th
                  style={{ padding: "15px 20px" }}
                  className="px-4 py-2 font-semibold leading-none opacity-80 border border-gray-500"
                  rowSpan={cell?.rowSpan}
                  colSpan={cell?.colSpan}
                  key={index}
                >
                  {cell.value}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="">
          {visibleRows.map((row, rowIndex) => (
            <tr className="" key={rowIndex}>
              {getRowData(row)?.map((cell, colIndex) => (
                <td
                  className="px-4 text-sm font-semibold text-gray-700 border border-blue-gray-100"
                  style={{ padding: "4px 0" }}
                  rowSpan={cell?.rowSpan}
                  colSpan={cell?.colSpan}
                  key={colIndex}
                >
                  {cell?.formula ? (
                    calculateFormula(row, cell, rowIndex, colIndex, rows)
                  ) : (
                    <Cell
                      cell={cell}
                      row={rowIndex}
                      col={colIndex}
                      onChangeHandler={handleUpdateCell}
                    />
                  )}
                </td>
              ))}
              {showDeleteButton && (
                <div className="flex justify-center iems-center my-2">
                  <button
                    className="hover:scale-110"
                    onClick={() => handleDelRow(row)}
                  >
                    🗑️
                  </button>
                </div>
              )}
            </tr>
          ))}

          {/* Conditionally render specific rows */}
          {showSpecificRows &&
            specificRows.map((row, rowIndex) => (
              <tr className="" key={rowIndex}>
                {getRowData(row)?.map((cell, colIndex) => (
                  <td
                    className="px-4 border-b border-blue-gray-50 text-xs"
                    style={{ padding: "10px 0" }}
                    rowSpan={cell?.rowSpan}
                    colSpan={cell?.colSpan}
                  >
                    {cell?.formula ? (
                      calculateFormula(row, cell, rowIndex, colIndex)
                    ) : (
                      <Cell
                        cell={cell}
                        row={rows.length - specificRows.length + rowIndex}
                        col={colIndex}
                        onChangeHandler={handleUpdateCell}
                      />
                    )}
                  </td>
                ))}
              </tr>
            ))}

          {showTotals && (
            <tr className="bg-gray-100">
              {header.length > 0 &&
                header[header.length - 1][`header_${header.length - 1}`].map(
                  (cell, index) => (
                    <td
                      className="px-4 py-2 font-semibold text-gray-700 border border-gray-200"
                      key={index}
                    >
                      {getColumnTotal(index, cell)}
                    </td>
                  )
                )}
            </tr>
          )}
        </tbody>
        <tfoot>
          <div>
            {/* Show the "Show More" button if there are more rows to display */}
            {visibleRowCount < filteredRows.length && (
              <button
                className="m-2 bg-white hover:bg-red-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
                onClick={handleShowMore}
                style={{ display: "block", margin: "15px 0px" }}
              >
                ↓ Показване на още редове
              </button>
            )}

            {/* Show the "Hide Rows" button only when all rows are visible */}
            {visibleRowCount >= filteredRows.length &&
              filteredRows.length > 20 && (
                <button
                  className="m-2 bg-white hover:bg-red-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-400 rounded shadow"
                  onClick={handleHideRows}
                  style={{ display: "block", margin: "15px 0px" }}
                >
                  ↑ Скрий редове
                </button>
              )}
          </div>
        </tfoot>
      </table>
    </div>
  );
};

export default Table;
