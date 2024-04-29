import { Cloth } from "./Cloth";

export class Magazine {
  type: string;
  capacity: number;
  private clothes: Cloth[];

  constructor(typeMg: string, capacityMg: number) {
    this.type = typeMg;
    this.capacity = capacityMg;
    this.clothes = [];
  }

  addCloth(cloth: Cloth): void {
    if (this.clothes.length < this.capacity) {
      this.clothes.push(cloth);
    }
  }
  removeCloth(color: string): boolean {
    const index = this.clothes.findIndex((cl) => cl.color === color);

    if (index !== -1) {
      this.clothes.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }

  getSmallestCloth(): Cloth {
    if (this.clothes.length <= 0) {
      return {} as Cloth;
    }

    if (this.clothes.length === 1) {
      return this.clothes[0];
    }

    const result = this.clothes.sort((a, b) => a.size - b.size);

    return result[0];
  }

  getCloth(color: string): Cloth {
    const cloth = this.clothes.find((cl) => cl.color === color);

    if (!cloth) {
      return {} as Cloth;
    }
    return cloth;
  }

  report(): string {

    const sortedClothes = this.clothes.sort((a, b) => a.size - b.size);
    const reportClothes = sortedClothes.map((c) => c.toString()).join('\n');

    const report = `${this.type} magazine contains:\n${reportClothes}`;
    return report;
  }
}
