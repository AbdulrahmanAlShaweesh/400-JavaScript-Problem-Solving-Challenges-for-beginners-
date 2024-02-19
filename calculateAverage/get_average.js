// write a function to calculate the average of a given numbers in a given list //
// get a list of numbers.
// create an intial value with value of 0
// loop through the lst,
// add the current number to the inital number
// get the length of the
// divide the total with by the length of the list.
function getAverage(numbers) {
  let total = 0;

  for (let number in numbers) {
    total += numbers[number];
  }
  return total;
}

console.log(getAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
