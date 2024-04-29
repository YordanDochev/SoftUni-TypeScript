"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drink = void 0;
class Drink {
    drinkName;
    drinkPrice;
    drinkVolume;
    constructor(name, price, volume) {
        this.drinkName = name;
        this.drinkPrice = price;
        this.drinkVolume = volume;
    }
    toString() {
        return `Name: ${this.drinkName}, Price: $${this.drinkPrice.toFixed(1)}, Volume: ${this.drinkVolume} ml`;
    }
}
exports.Drink = Drink;
//# sourceMappingURL=Drink.js.map