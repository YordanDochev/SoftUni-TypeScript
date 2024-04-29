type CityType = {
  cityName: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => void;
  applyGrowth: (percentage: number) => void;
  applyRecession: (percentage: number) => void;
};

function cityTaxes(
  cityName: string,
  population: number,
  treasury: number
): CityType {
  const cityObj: CityType = {
    cityName,
    population,
    treasury,
    taxRate: 10,

    collectTaxes() {
      const taxAmount = Math.floor(this.population * this.taxRate);

      this.treasury += taxAmount;
    },

    applyGrowth(percentage: number){
      const growthFactor = 1 + percentage / 100;

      this.population = Math.floor(this.population * growthFactor);
    },
    applyRecession(percentage:number){
      const decreaseFactor = 1 - percentage / 100;

      this.treasury = Math.floor(this.treasury * decreaseFactor)
    }
  };

  return cityObj
}

// const city = cityTaxes("Tortuga", 7000, 15000);
// console.log(city);

const city = cityTaxes("Tortuga", 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
// city.applyRecession(5);
// console.log(city.treasury);
