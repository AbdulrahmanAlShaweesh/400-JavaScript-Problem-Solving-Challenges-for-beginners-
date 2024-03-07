// getting a string.
// remove the first and last char using indexof
// return the rest of the string.

function removeFirstLastChar(string) {
  return string.slice(1, -1);
}

console.log(removeFirstLastChar("Abdulrahman"));

// adding other method using

// other way to solve the task.
function removeFirstLastletters(string) {
  let restOfText = "";

  for (let i in string) {
    i !== 0 && i !== string.length ? "" : (restOfText += string[i]);
  }

  return restOfText;
}

console.log(removeFirstLastletters("Abdulrahman"));
