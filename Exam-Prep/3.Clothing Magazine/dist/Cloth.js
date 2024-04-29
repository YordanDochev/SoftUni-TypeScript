"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
class Cloth {
    color;
    size;
    type;
    constructor(colorCl, sizeCl, typeCl) {
        this.color = colorCl;
        this.size = sizeCl;
        this.type = typeCl;
    }
    toString() {
        return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
    }
}
exports.Cloth = Cloth;
//# sourceMappingURL=Cloth.js.map