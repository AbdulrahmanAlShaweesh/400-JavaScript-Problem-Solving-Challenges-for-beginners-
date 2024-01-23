// check if the array is empty
// get the heighest number
// get the lowest number
// sum all numbers.

function sumNumbers(numbers) {
  numbers == null
    ? console.log(0)
    : console.log(
        numbers
          .sort((a, b) => a - b)
          .slice(1, -1)
          .reduce((acc, current) => acc + current, 0)
      );
}
sumNumbers([12, -2, 4, 32, 100, 43]);
