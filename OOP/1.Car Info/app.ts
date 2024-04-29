// interface CarInfo {
//   brand: string;
//   model: string;
//   horsePower: number;
// }

class Car {
  private brand: string;
  private model: string;
  private horsePower: number;

  constructor(inputBrand: string, inputModel: string, inputHorsePower: number) {
    this.brand = inputBrand;
    this.model = inputModel;
    this.horsePower = inputHorsePower;
  }

  get getBrand(): string {
    return this.brand;
  }

  get getModel(): string {
    return this.model;
  }

  get getHorsePower(): number {
    return this.getHorsePower;
  }

  set Brand(newBrand: string) {
    this.brand = newBrand;
  }

  set Model(newModel: string) {
    this.model = newModel;
  }

  set HorsePower(newHorsePower: number) {
    this.horsePower = newHorsePower;
  }

  carInformation() {
    return console.log(
      `The car is: ${this.brand} ${this.model} – ${this.horsePower} HP.`
    );
  }
}

const car1 = new Car("Chevrolet", "Impala", 390);
car1.carInformation();
console.log(car1.getBrand)
car1.Brand = 'Audi'
car1.carInformation();
console.log(car1.getBrand)

