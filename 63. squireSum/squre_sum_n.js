// get a series of numbers.
// loop through all numbers.
// raise each number to the power of 2
// sum the numbers.
// return the results.
function squireSum(numbers) {
  return numbers
    .map((number) => number ** 2)
    .reduce((acc, currentNumber) => acc + currentNumber);
}

console.log(squireSum([1, 2, 2]));
