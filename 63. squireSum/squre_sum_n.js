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

// using loop to solve the task.
function sumOfSquire(numbers) {
  let counter = 0;

  for (let i in numbers) {
    counter += numbers[i] ** 2;
  }
  return counter;
}

console.log(sumOfSquire([1, 2, 2]));
