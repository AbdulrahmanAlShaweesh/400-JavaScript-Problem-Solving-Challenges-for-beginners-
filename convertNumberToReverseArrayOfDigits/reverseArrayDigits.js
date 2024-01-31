// get a random Number
// convert the number to string
// split the string into array
// convert the string into number
// reverse the array elements

function reverseArrayDigits(n) {
  return n
    .toString()
    .split("")
    .map((i) => parseInt(i))
    .reverse();
}

console.log(reverseArrayDigits(123456789));
