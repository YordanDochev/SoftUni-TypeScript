export const useCalculateValues = (rows, calculateFormula) => {
  const transformed = rows.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      return cell?.formula
        ? { value: calculateFormula(data, rows, rowIndex, colIndex) }
        : cell;
    });
  });

  return transformed;
};
