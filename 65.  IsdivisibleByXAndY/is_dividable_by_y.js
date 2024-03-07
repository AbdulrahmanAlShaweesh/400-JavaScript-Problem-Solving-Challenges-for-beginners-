// get a numbers.
// check if the number is negative
// return alert error message.
// else : check if the number can be divid by x and y
// return a message to show user that the number is dividable by x and y
// else eturn a mesge to show use that the number can not be divide by x and x.

function isDivisible(n, x, y) {
  if (n < 0 || x < 0 || y < 0) {
    return alert("input can not be a negative");
  } else {
    if (n % x === 0 && n % y === 0) {
      return `true because ${n} is divisable by ${x} and ${y}`;
    } else {
      if (n % x !== 0) {
        return `false because ${n} is not diviable by ${x}`;
      } else {
        return `false because ${n} is not diviable by ${y}`;
      }
    }
  }
}

console.log(isDivisible(12, 7, 5));
