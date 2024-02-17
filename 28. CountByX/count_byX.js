// get the range of the number
// loop through the n.
// multuply the x with n.
// add the number to the new array
// return the new array

function countByX(start, end) {
  let result = [];
  for (let counter = 1; counter <= end; counter++) {
    result.push(start * counter);
  }

  return result;
}

console.log(countByX(1, 10));
