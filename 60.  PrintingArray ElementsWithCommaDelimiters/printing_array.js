// getting an array of letter or numbers.
// using join, convert it into string and add comman between the letters/
// return the string.

function printtingArray(array) {
  return `"${array.join(",")}"`;
}

console.log(printtingArray(["h", "e", "l", "l", "o"]));
console.log(printtingArray(["h", "o", "l", "a"])); // "h,o,l,a "

// other way to do the task.
function printArray(array) {
  let string = "";

  for (let i = 0; i < array.length; i++) {
    string +=  array[i] + ',';
  }

  return `"${string.slice(0, -1)}"`;
}

console.log(printArray(["h", "o", "l", "a"]));
