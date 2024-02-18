// get the string from using
// loop through the string.
// check if the letter is a space : remove is
// else added to inital strnning
// return the stirng
function removeString(text) {
  let initalText = "";

  for (let i in text) {
    text[i] === " " ? "" : (initalText += text[i]);
  }
  return initalText;
}

console.log(removeString("Abd lrah      man"));

// other way to solve the problem.
// get the string from user.
// using repace method to change the white space into nothing.
function removeWhiteSpace(str) {
  return str.replace(" ", ""); // remove the white space and replace it with nothing.
}

console.log(removeWhiteSpace("Aadadsasd asdasd"));

// some the task using split and join method
function removeWhiteSpaces(str) {
  return str.split(" ").join("");
}

console.log(removeWhiteSpaces("asd as asas"));
