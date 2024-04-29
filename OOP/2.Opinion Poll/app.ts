class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getPersonInfo(): void {
    return console.log(`${this.name} is ${this.age} years old`);
  }
}


const p1 = new Person('Peter',12)
p1.getPersonInfo();