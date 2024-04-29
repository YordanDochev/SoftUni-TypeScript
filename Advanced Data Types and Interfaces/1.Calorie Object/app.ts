function calorieObjCast(array: string[]): void {
  const foodObject: { [key: string]: number } = {};

  for (let index = 0; index < array.length; index += 2) {
    const foodName: string = array[index];
    const foodCalories: number = Number(array[index + 1]);

    foodObject[foodName] = foodCalories;
  }

  console.log(foodObject);
}

calorieObjCast(["Yoghurt", "48", "Rise", "138", "Apple", "52"]);
