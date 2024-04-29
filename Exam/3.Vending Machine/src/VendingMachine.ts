import { Drink } from "./Drink";

export class VendingMachine {
  buttonCapacity: number;
  drinks: Drink[];

  constructor(capacity: number) {
    this.buttonCapacity = capacity;
    this.drinks = [];
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink);
    }
  }

  removeDrink(name: string): boolean {
    const index = this.drinks.findIndex((d) => d.drinkName === name);

    if (index !== -1) {
      this.drinks.splice(index, 1);
      return true;
    }

    return false;
  }

  getLongest(): string {
    if (!this.drinks.length) {
      return "";
    }

    let longestDrink = this.drinks[0];

    for (const drink of this.drinks) {
      if (drink.drinkVolume > longestDrink.drinkVolume) {
        longestDrink = drink;
      }
    }

    return longestDrink.toString();
  }

  getCheapest(): string {
    if (!this.drinks.length) {
      return "";
    }

    let cheapestDrink = this.drinks[0];

    for (const drink of this.drinks) {
      if (drink.drinkPrice < cheapestDrink.drinkPrice) {
        cheapestDrink = drink;
      }
    }

    return cheapestDrink.toString();
  }

  buyDrink(name: string): string {
    const drink = this.drinks.find((d) => d.drinkName === name);

    if (drink) {
      return drink.toString();
    }

    return "Drink not found";
  }

  getCount(): number {
    return this.drinks.length;
  }

  report(): string {
    let result = "Drinks available: \n";
    result += this.drinks.map((d) => d.toString()).join("\n");

    return result;
  }
}
