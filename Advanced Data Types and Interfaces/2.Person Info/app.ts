type Person = {
  firstName: string;
  lastName: string;
  age: number;
};

function personCreation(prop1: string, prop2: string, prop3: string): Person {
  return {
    firstName: prop1,
    lastName: prop2,
    age: Number(prop3),
  } as Person;
}

console.log(personCreation("Peter", "Pan", "20"));
