function calorieObjCast(array) {
    var foodObject = {};
    for (var index = 0; index < array.length; index += 2) {
        var foodName = array[index];
        var foodCalories = Number(array[index + 1]);
        foodObject[foodName] = foodCalories;
    }
    console.log(foodObject);
}
calorieObjCast(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
