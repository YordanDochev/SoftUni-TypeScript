# React App with Vite

This is a simple React application bootstrapped with Vite, a fast development build tool that provides instant server start and hot module replacement (HMR) out of the box.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- Node.js: [Download](https://nodejs.org/)
- npm: Comes with Node.js installation
- yarn: [Installation Instructions](https://classic.yarnpkg.com/en/docs/install)

### Installing

1. **Clone the repository:**

2. **Navigate into the project directory:**

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
```

### Formating with prettier

Run inside `/client` directory:

```bash
yarn format
```

### Table instructions

To add new table model start with creating a new `const` object inside `Table.jsx`.
I.e. for "Floor" sheet of the Excel file, create `FloorTableData` _(Use `WallsTableData` as an example)_.
The object should have `initialHeader` and `initialRows` properties.

After adding all the data from the Excel tables, you can test the data by changing test data to your new object:
`const testData = FloorTableData`

Please use formula object when needed:

```
{
  formula: true, // a flag to show us we need to pass this to the calculateFormula function
  values: [{ row: 0, col: 2 }, { row: 0, col: 1}], // formula values - represented by rows coordinates (row, col)
  operation: 'divide' // could be anything as long as we remember to handle it inside calculateFormula function
 }

// Example of adding new formula operation
const rowsLength = rows.length;
{
  formula: true,
  values: [{ row: 0, col: 2 }, { row: 0, col: 1 }, { row: (rowsLength - 1), col: 2 }],
  operation: "a * b / c"
}
const calculateFormula = (formulaCell) => {
  const { values, operation } = formulaCell;
  const firstValue = parseFloat(rows[values[0].row][values[0].col].replace(',', '.'));
  const secondValue = parseFloat(rows[values[1].row][values[1].col].replace(',', '.'));

  if (operation === "a * b / c") {
    const thirdValue = parseFloat(rows[values[2].row][values[2].col].replace(',', '.'));
    return firstValue * secondValue / thirdValue;
    ...
    // When we introduce an operation, we expand this function to handle it
```
