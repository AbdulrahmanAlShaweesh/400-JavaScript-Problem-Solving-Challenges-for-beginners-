// check if the array is empty
// get the heighest number
// get the lowest number
// sum all numbers.
function sumNumber(numbers) {
  numbers.length === 0 ? 0 : sumNumbers(numbers);
}

sumNumber([12, -2, 4, 32, 100, 43]);

function sumNumbers(numbers) {
  let maxNumber = Math.max(...numbers);
  let minNumber = Math.min(...numbers);

  let filterValue = numbers.filter((x) => x !== maxNumber && x !== minNumber);
  let newArray = filterValue.reduce((acc, current) => acc + current, 0);

  console.log(newArray);
}
