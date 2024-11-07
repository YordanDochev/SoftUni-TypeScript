export function createEnergyCalculationsObject() {
    // Define the template for each row's structure
    const template = [
        { value: "" },
        { value: "" },
        { formula: true, operation: "getEPKwhForYear" },
        { formula: true, operation: "getEPCostForYear" },
        { formula: true, operation: "getGASKwhForYear" },
        { formula: true, operation: "getGASCostForYear" },
        { formula: true, operation: "sumKWHTotal" },
        { formula: true, operation: "sumCostTotal" },
        { value: "" },
        { formula: true, operation: "sumSpecificCost" },
        { value: "" },
        { formula: true, operation: "sumReferenceCost" },
        { formula: true, operation: "getCostSquareEnergy" },
        { formula: true, operation: "getCostSquareGas" },
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
  
  