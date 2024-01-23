// get the sum of all positive numbers.
function sumOfPositiveNumbers() {
  // inital value = 0;
  // Array Loops
  // check if the number is poitive or negative
  // add the number to the inital value if poitive
  const numbers = [1, 3, 5, 7, 0, -10, 11, -2, -5, 12, 93, 102];
  let initalValue = 0;

  for (let number in numbers) {
    // using ternary perator to check if the number
    number > 0 ? (initalValue += numbers[number]) : 0;
  }
  console.log(initalValue);
}

sumOfPositiveNumbers();

// using build in function

function sumOfPossitiveNumbers(array) {
  // will return all the numbers that are greater than 0
  // the filter will take annuonmouce function and resture the data based on the condition
  return array.filter((number) => number > 0).reduce((acc, current) => acc + current , 0);
}

console.log(sumOfPossitiveNumbers([1, -2, 34, 0, 43, -1, -123, 12]));
