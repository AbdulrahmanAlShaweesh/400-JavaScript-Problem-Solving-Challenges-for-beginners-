// get a string
// create an empty sstring
// loop through the string
// added the current value to the varable
// retunr the new String

function reverseString(string) {
  let reverse_string = [];

  for (let i = string.length; i >= 0; i--) {
    reverse_string.push(string[i]);
  }

  return reverse_string.slice(1).join("");
}

console.log(reverseString("world")); // drow
