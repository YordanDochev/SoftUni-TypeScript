export function createWindowObject() {
  // Define the template for each row's structure
  const template = [
    { value: "" },
    { value: "" },
    { value: "" },
    { formula: true, operation: "windowArea" },
    { value: 2.63 },
    { value: 0.51 },
    { value: "" },
    { formula: true, operation: "northFacadeArea" },
    { value: "" },
    { formula: true, operation: "eastFacadeArea" },
    { value: "" },
    { formula: true, operation: "southFacadeArea" },
    { value: "" },
    { formula: true, operation: "westFacadeArea" },
    { formula: true, operation: "totalArea" },
  ];

  // Generate an array of objects based on the template structure
  return template.map((item) => {
    let obj = {};
    // Copy each key-value pair from the template into the new object
    for (let key in item) {
      obj[key] = item[key];
    }
    return obj;
  });
}
