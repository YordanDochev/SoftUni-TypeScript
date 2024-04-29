class Cat {
  catName: string;
  catAge: number;

  constructor(name: string, age: number) {
    this.catName = name;
    this.catAge = age;
  }

  meow() {
    return console.log(`${this.catName}, age ${this.catAge} says Meow`);
  }
}

function makeCatInstance(array: string[]): void {
  array.forEach((c) => {
    let [catName, catAge] = c.split(" ");

    const cat: Cat = new Cat(catName, Number(catAge));
    cat.meow();
  });
}

makeCatInstance(['Candy 1', 'Poppy 3', 'Nyx 2']);
