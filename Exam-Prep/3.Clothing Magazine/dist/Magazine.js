"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Magazine = void 0;
class Magazine {
    type;
    capacity;
    clothes;
    constructor(typeMg, capacityMg) {
        this.type = typeMg;
        this.capacity = capacityMg;
        this.clothes = [];
    }
    addCloth(cloth) {
        if (this.clothes.length < this.capacity) {
            this.clothes.push(cloth);
        }
    }
    removeCloth(color) {
        const index = this.clothes.findIndex((cl) => cl.color === color);
        if (index !== -1) {
            this.clothes.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    getSmallestCloth() {
        if (this.clothes.length <= 0) {
            return {};
        }
        if (this.clothes.length === 1) {
            return this.clothes[0];
        }
        const result = this.clothes.sort((a, b) => a.size - b.size);
        return result[0];
    }
    getCloth(color) {
        const cloth = this.clothes.find((cl) => cl.color === color);
        if (!cloth) {
            return {};
        }
        return cloth;
    }
    report() {
        const sortedClothes = this.clothes.sort((a, b) => a.size - b.size);
        const reportClothes = sortedClothes.map((c) => c.toString()).join('\n');
        const report = `${this.type} magazine contains:\n${reportClothes}`;
        return report;
    }
}
exports.Magazine = Magazine;
//# sourceMappingURL=Magazine.js.map