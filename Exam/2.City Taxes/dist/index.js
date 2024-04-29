function cityTaxes(cityName, population, treasury) {
    const cityObj = {
        cityName,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            const taxAmount = Math.floor(this.population * this.taxRate);
            this.treasury += taxAmount;
        },
        applyGrowth(percentage) {
            const growthFactor = 1 + percentage / 100;
            this.population = Math.floor(this.population * growthFactor);
        },
        applyRecession(percentage) {
            const decreaseFactor = 1 - percentage / 100;
            this.treasury = Math.floor(this.treasury * decreaseFactor);
        }
    };
    return cityObj;
}
const city = cityTaxes("Tortuga", 7000, 15000);
console.log(city);
// const city = cityTaxes("Tortuga", 7000, 15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);
// city.applyRecession(5);
// console.log(city.treasury);
//# sourceMappingURL=index.js.map