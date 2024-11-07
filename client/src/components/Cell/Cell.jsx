import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectionBase } from "../../app/slices/selectionSlice";

const createOption = (label) => ({
  label,
  value: label.charAt(0).toUpperCase() + label.slice(1).toLowerCase(),
});

const createDefaultOptions = (selectionData) => {
  return selectionData.map(createOption);
};

const Cell = ({ cell, row, col, onChangeHandler }) => {
  const { value, type, locked, customStyle, selectionKey } = cell;
  const dispatch = useDispatch();

  let selectionData = selectionKey
    ? useSelector((state) => {
        const fields = state?.selection?.[selectionKey]?.fields;
        return fields.map((field) => field.name);
      })
    : [];

  const [isLoading, setIsLoading] = useState(false);
  const [currentValue, setCurrentValue] = useState(
    value !== undefined ? value : null
  );

  const handleChange = (e) => {
    const value = isNaN(parseFloat(e?.target?.value))
      ? e?.value
      : parseFloat(e?.target?.value);
    onChangeHandler(value, row, col);
  };

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      dispatch(
        updateSelectionBase({ value: inputValue, key: cell?.selectionKey })
      );
      onChangeHandler(inputValue, row, col);
      setIsLoading(false);
      setCurrentValue(newOption);
    }, 1000);
  };

  const inputType = isNaN(parseFloat(value)) ? "text" : "number";

  return type === "selection" ? (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => {
        setCurrentValue(newValue);
        handleChange(newValue);
      }}
      onCreateOption={handleCreate}
      options={createDefaultOptions(selectionData)}
      value={currentValue}
      placeholder={value !== undefined ? `${value}` : "Select"}
    />
  ) : (
    <input
      type={inputType}
      onChange={(e) => handleChange(e)}
      value={value}
      disabled={locked}
      className={
        customStyle
          ? customStyle
          : "block w-full px-2 text-center rounded-lg text-sm text-gray-900 font-normal focus:ring-blue-500 focus:border-blue-500"
      }
    />
  );
};

export default Cell;
