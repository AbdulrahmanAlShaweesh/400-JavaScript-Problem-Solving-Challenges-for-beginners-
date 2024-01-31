// create counter with inital value of 0
// create an array with value of true and false
// Loop through the array
// check if the element is true
// increase the intial value by 1
function countingSheep(sheeps) {
  let counter = 0;
  for (let i = 0; i < sheeps.length; i++) {
    sheeps[i] === true ? counter++ : "";
  }
  return counter;
}

const sheeps = [
  // true  => sheep move, false => sheep stand at its place;
  true,
  true,
  true,
  false,
  true,
  false,
  false,
  false,
  true,
  true,
  false,
  true,
];
console.log(countingSheep(sheeps));

// doing the task using map function
function countingSheeps(sheeps) {
  let counter = 0;
  sheeps.map((sheep) => (sheep === true ? counter++ : ""));

  return counter;
}

console.log(countingSheeps(sheeps));

function Sheeps(sheep) {
  let counter = 0;

  sheep.filter((value, index) => (value === true ? counter++ : ""));

  return counter;
}

console.log(Sheeps(sheeps));
