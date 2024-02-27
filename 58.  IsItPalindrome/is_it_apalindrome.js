// get a string.
// check if the string in lowercase ===
// string in lower case . reverse.s

function isPalindrome(string) {
  return (
    string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
  );
}

console.log(isPalindrome("madam"));

// other way to do the task.
function isPalindromes(string) {
  let text = [];

  for (let index = string.length; index >= 0; index--) {
    text.push(string[index]);
  }

  //   return text;
  return text.slice(1).join("") === string;
}

// console.log(isPalindromes('hello'))
console.log(isPalindromes("hello"));
