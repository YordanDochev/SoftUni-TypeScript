var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.catName = name;
        this.catAge = age;
    }
    Cat.prototype.meow = function () {
        return console.log("".concat(this.catName, ", age ").concat(this.catAge, " says Meow"));
    };
    return Cat;
}());
function makeCatInstance(array) {
    array.forEach(function (c) {
        var _a = c.split(" "), catName = _a[0], catAge = _a[1];
        var cat = new Cat(catName, Number(catAge));
        cat.meow();
    });
}
makeCatInstance(['Candy 1', 'Poppy 3', 'Nyx 2']);
