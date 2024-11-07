export function createEnergyDataObject() {
    // Define the template for each row's structure
    const template = [
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { value: "" },
      { formula: true, operation: "sumPerYear" },
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
  
  