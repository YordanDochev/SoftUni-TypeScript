class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPersonInfo() {
        return console.log(`${this.name} is ${this.age} years old`);
    }
}
const p1 = new Person('Peter', 12);
p1.getPersonInfo();
//# sourceMappingURL=app.js.map