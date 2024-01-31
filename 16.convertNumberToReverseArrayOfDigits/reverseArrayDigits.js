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

// other way using for loop.
function reverseDigits(n) {
  const number = [];

  for (i in n) {
    number.push(parseInt(n[i]));
  }

  number.reverse();
  console.log(number);
}

reverseDigits("1234");
