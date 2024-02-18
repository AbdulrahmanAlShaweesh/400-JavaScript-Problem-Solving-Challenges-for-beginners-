// get the string.
// convert to str to list
// reverse the letters
// convert the list into str
// return the string

function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(reverseString("Hi, There!"));
