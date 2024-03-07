// get an array of a numbers.
// loop through the array.
// muliply the number with itself.
// added the number to a new array
// return the new array
function maps(numbers) {
  return numbers.map((number) => number + number);
}

console.log(maps([1, 2, 3]));

// other answer using loop.
function map(numbers) {
  let nums = [];

  for (let i in numbers) {
    nums.push(numbers[i] * 2);
  }
  return nums;
}

console.log(map([1, 2, 3]));
