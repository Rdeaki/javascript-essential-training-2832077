/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// const fishbowl = {
//   name: "Large Aquarium",
//   volume: 30,
//   shape: "sqaure",
//   fishTypeCount: {
//     red: 3,
//     blue: 4,
//     striped: 6,
//     octopus: 1,
//   },
//   lidOpen: false,
//   toggLid: function (lidStatus) {
//     this.lidOpen = lidStatus;
//   },
//   newFishCount: function (typeRed, typeBlue, typeStriped, typeOctopus) {
//     this.fishTypeCount.red = typeRed;
//     this.fishTypeCount.blue = typeBlue;
//     this.fishTypeCount.striped = typeStriped;
//     this.fishTypeCount.octopus = typeOctopus;
//   },
// };

// console.log("The fishbowl object", fishbowl);
// console.log("Red fish count", fishbowl.fishTypeCount.red);

const ramranch = {
  acres: 60,
  stableCount: 6,
  season: "summer",
  animalCount: {
    goat: 12,
    horses: 8,
    chicken: 13,
    pigs: 10,
    cows: 16,
  },
  newAnimalCount: function (gaotNum, horsesNum, chickenNum, pigsNum, cowsNum) {
    this.animalCount.goat = gaotNum;
    this.animalCount.horses = horsesNum;
    this.animalCount.chicken = chickenNum;
    this.animalCount.pigs = pigsNum;
    this.animalCount.cows = cowsNum;
  },
};

console.log("The ramranch object", ramranch);
console.log("Chicken count", ramranch.animalCount.chicken);
