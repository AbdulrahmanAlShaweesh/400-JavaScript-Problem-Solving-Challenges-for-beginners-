// get an arrays of numbers.
// using filter check the smalles number.
// return the smalles number.

function findSmallestNumber(numbers) {
  let smalles = 0;
  for (let i in numbers) {
    if (smalles > numbers[i]) {
      smalles = numbers[i];
    }
  }
  return smalles;
}

console.log(findSmallestNumber([1, 2, 3, -1, -10, -20, -2, -30]));
