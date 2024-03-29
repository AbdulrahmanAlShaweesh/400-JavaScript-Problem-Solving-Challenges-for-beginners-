// write a function to calculate the average of a given numbers in a given list //
// get a list of numbers.
// create an intial value with value of 0
// loop through the lst,
// add the current number to the inital number
// get the length of the
// divide the total with by the length of the list.
function getAverage(numbers) {
  let total = 0;
  if (numbers.length === 0) {
    return 0;
  }
  for (let number in numbers) {
    total += numbers[number];
  }
  return total / numbers.length;
}

console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// building a function to do the task using map and reduce.
function getAverageOfNumbers(numbers) {
  let total = 0;
  return numbers.length !== 0? numbers.reduce((x, n) => x + n) / numbers.length : 0;
}

console.log(getAverageOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
