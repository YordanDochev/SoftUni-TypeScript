import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTable, updateHeading } from "../../app/slices/tablesSlice";

export const AddTable = ({ tableSlice, tables, tableMap }) => {
  const [heading, setHeading] = useState("");
  const [tableStates, setTableStates] = useState(
    tables.map(() => ({ heading: "", isNew: false }))
  );
  const [currentIndex, setCurrentIndex] = useState(tables.length); // Track where the new table should be added
  const [selectedTableType, setSelectedTableType] = useState(""); // Track the selected table type

  const dispatch = useDispatch();

  // Function to handle which table type is selected (checkbox)
  const handleCheckboxChange = (event) => {
    setSelectedTableType(event.target.id); // Set the selected type based on the checkbox ID
  };

  const handleAddTable = (index) => {
    // If tableMap has only one key, automatically use it
    const keys = Object.keys(tableMap);
    let selectedType = selectedTableType;

    if (keys.length === 1) {
      selectedType = keys[0]; // If only one key, use it directly
    }

    // Check if the table type is valid
    if (!tableMap[selectedType]) {
      alert("Please select a table type before adding.");
      return;
    }
    console.log(tableMap[selectedType]);

    dispatch(
      addTable({
        tableSlice: tableSlice, // Use the selected table type or the only one available
        table: tableMap[selectedType],
        position: currentIndex,
      })
    );
    dispatch(
      updateHeading({
        table: tableSlice,
        value: heading,
        index: currentIndex,
      })
    );

    // Update the visibleTables state to add a new table and update tableStates to mark it as newly created
    setTableStates((prev) => {
      const updatedStates = [...prev];
      updatedStates.splice(index + 1, 0, { heading: "", isNew: true }); // Add a new state object for the new table
      return updatedStates;
    });

    // Increment the index for the next table
    setCurrentIndex((prevIndex) => prevIndex + 1);

    // Clear the selected table type (checkboxes)
    setSelectedTableType("");
  };

  const handleInputChange = (event, index) => {
    let value = event.target.value;
    setTableStates((prev) => {
      const updatedStates = [...prev];
      updatedStates[index].heading = value; // Update the heading for the specific table input
      return updatedStates;
    });
  };

  return (
    <div className="w-screen flex mb-16">
      <button
        className={
          "m-2 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        }
        onClick={() => handleAddTable(currentIndex - 1)}
      >
        <p>+ Добави таблица</p>
      </button>

      <input
        type="text"
        placeholder="Заглавие"
        value={heading}
        onChange={(event) => {
          handleInputChange(event, currentIndex - 1);
          setHeading(event.target.value);
        }}
        className="border-b border-gray-400 p-2"
      />

      {/* Conditionally render checkboxes only if tableMap has more than one entry */}
      {Object.keys(tableMap).length > 1 && (
        <div>
          {Object.keys(tableMap).map((key) => (
            <div key={key}>
              <label htmlFor={key}>{key}</label>
              <input
                id={key}
                type="checkbox"
                checked={selectedTableType === key}
                onChange={handleCheckboxChange}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
