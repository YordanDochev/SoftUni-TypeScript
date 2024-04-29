export class Drink {
  drinkName: string;
  drinkPrice: number;
  drinkVolume: number;

  constructor(name: string, price: number, volume: number) {
    this.drinkName = name;
    this.drinkPrice = price;
    this.drinkVolume = volume;
  }

  toString(): string {
    return `Name: ${this.drinkName}, Price: $${this.drinkPrice.toFixed(1)}, Volume: ${this.drinkVolume} ml`;
  }
}
