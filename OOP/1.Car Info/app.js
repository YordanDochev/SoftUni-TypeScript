// interface CarInfo {
//   brand: string;
//   model: string;
//   horsePower: number;
// }
class Car {
    constructor(inputBrand, inputModel, inputHorsePower) {
        this.brand = inputBrand;
        this.model = inputModel;
        this.horsePower = inputHorsePower;
    }
    get getBrand() {
        return this.brand;
    }
    get getModel() {
        return this.model;
    }
    get getHorsePower() {
        return this.getHorsePower;
    }
    set Brand(newBrand) {
        this.brand = newBrand;
    }
    set Model(newModel) {
        this.model = newModel;
    }
    set HorsePower(newHorsePower) {
        this.horsePower = newHorsePower;
    }
    carInformation() {
        return console.log(`The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`);
    }
}
const car1 = new Car("Chevrolet", "Impala", 390);
car1.carInformation();
console.log(car1.getBrand);
car1.Brand = 'Audi';
car1.carInformation();
console.log(car1.getBrand);
//# sourceMappingURL=app.js.map