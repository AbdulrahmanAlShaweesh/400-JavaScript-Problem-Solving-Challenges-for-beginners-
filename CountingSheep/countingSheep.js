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

