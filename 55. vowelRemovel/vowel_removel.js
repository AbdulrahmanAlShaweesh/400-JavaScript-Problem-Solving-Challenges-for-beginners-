// getting the string
// check if the string conaint a vowel letters
// if yes, then remove it

function shorcut(string) {
  let vowels = "aeiou";

  return string
    .split("")
    .filter(
      (letter, index) =>
        letter !== "a" &&
        letter !== "e" &&
        letter !== "i" &&
        letter !== "o" &&
        letter !== "u"
    )
    .join("");
}

console.log(shorcut("codewars"));

// way 2: using map.
function shortcuts(string) {
  return string
    .split("")
    .map((letter) =>
      letter !== "a" &&
      letter !== "e" &&
      letter !== "i" &&
      letter !== "o" &&
      letter !== "u"
        ? letter
        : ""
    )
    .join("");
}

console.log(shortcuts("cut"));
