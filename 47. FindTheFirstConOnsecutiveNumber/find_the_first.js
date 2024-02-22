// get an array of numbers
// loop through the array
// chech if the second number - first number !== 0
// it cononsecond number return the second number
 

function firstConOnsecutiveNumber(array) {
  let re = "";
  for (let i = 1; i < array.length; i++) {
    if (array[i] !== array[i - 1]) {
      return array[i];
    }
  }
  return null;
}

console.log(firstConOnsecutiveNumber([1, 2, 3, 4, 6, 7]));
