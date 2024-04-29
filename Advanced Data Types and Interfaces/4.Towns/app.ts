type Town = {
  town: string;
  latitude: number;
  longitude: number;
};

function townCreation(input: string[]): void {
  const townArr: Town[] = [];

  input.forEach((row) => {
    const [town, latitudeStr, longitudeStr] = row.split(" | ");
    const latitude: number = Number(Number(latitudeStr).toFixed(2));
    const longitude: number = Number(Number(longitudeStr).toFixed(2));

    const townObj: Town = {
      town,
      latitude,
      longitude,
    };

    townArr.push(townObj);
  });

  return townArr.forEach((townEntry) => {
    console.log(townEntry);
  });
}

townCreation([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
