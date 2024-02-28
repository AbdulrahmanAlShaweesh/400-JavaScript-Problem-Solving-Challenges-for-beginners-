// getting an array of letter or numbers.
// using join, convert it into string and add comman between the letters/
// return the string.

function printtingArray(array) {
  return `"${array.join(",")}"`;
}

console.log(printtingArray(["h", "e", "l", "l", "o"]));
console.log(printtingArray(["h", "o", "l", "a"])); // "h,o,l,a "
