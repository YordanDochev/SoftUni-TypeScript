type Hero = {
  name: string;
  level: number;
  items?: string[];
};

function heroCreation(array: string[]): void {
  const heroArray: Hero[] = [];

  array.forEach((row) => {
    const [name, levelStr, itemsStr] = row.split(" / ");
    const level: number = Number(levelStr);
    const items: string[] = itemsStr.split(", ");

    const hero: Hero = {
      name,
      level,
      items,
    };

    heroArray.push(hero);
  });

  heroArray.sort((a, b) => a.level - b.level);

  return heroArray.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);

    console.log(`level => ${hero.level}`);

    console.log(`Items => ${hero.items.join(", ")}`);
  });
}
heroCreation([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
heroCreation([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
