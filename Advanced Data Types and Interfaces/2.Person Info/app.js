function personCreation(prop1, prop2, prop3) {
    return {
        firstName: prop1,
        lastName: prop2,
        age: Number(prop3),
    };
}
console.log(personCreation("Peter", "Pan", "20"));
