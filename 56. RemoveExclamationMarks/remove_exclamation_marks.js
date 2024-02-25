// get a string
// check convert into array
// using fillter check if the string contains a Exclamation Marks.
// if yes, remove it else return the letter
// cnver the list into string
// return the string.
function ExclamationMarks(string) {
  return string
    .split("")
    .filter((letter, index) => (letter !== "!"))
    .join("");
}

console.log(ExclamationMarks("232!asd!fdsd!"));
