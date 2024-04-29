export class Cloth {
  color: string;
  size: number;
  type: string;

  constructor(colorCl: string, sizeCl: number, typeCl: string) {
    this.color = colorCl;
    this.size = sizeCl;
    this.type = typeCl;
  }

  toString(): string {
    return `Product: ${this.type} with size ${this.size}, color ${this.color}`;
  }
}
