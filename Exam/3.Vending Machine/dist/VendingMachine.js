"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(capacity) {
        this.buttonCapacity = capacity;
        this.drinks = [];
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const index = this.drinks.findIndex((d) => d.drinkName === name);
        if (index !== -1) {
            this.drinks.splice(index, 1);
            return true;
        }
        return false;
    }
    getLongest() {
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
    getCheapest() {
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
    buyDrink(name) {
        const drink = this.drinks.find((d) => d.drinkName === name);
        if (drink) {
            return drink.toString();
        }
        return "Drink not found";
    }
    getCount() {
        return this.drinks.length;
    }
    report() {
        let result = "Drinks available: \n";
        result += this.drinks.map((d) => d.toString()).join("\n");
        return result;
    }
}
exports.VendingMachine = VendingMachine;
//# sourceMappingURL=VendingMachine.js.map