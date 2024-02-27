// get an array of numbers.
// create a varable with a value of 1
// loop through the array
// multiple varable value with the current index value
// return the result.

function grow(array) {
  let intalvalue = 1;

  for (let i in array) {
    intalvalue *= array[i];
  }
  return intalvalue;
}

console.log(grow([1, 2, 3, 4]));
