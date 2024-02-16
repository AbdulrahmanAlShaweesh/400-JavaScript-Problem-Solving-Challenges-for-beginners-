// get a string from user.
// loop through the string.
// multiple the letter with itself
// added to a inital string
// return the intial string.
function doubleCount() {
  let user_input = document.getElementById("input").value;
  document.getElementById("result").innerHTML = user_input;
  var test = "";

  for (let letter in user_input) {
    test += user_input[letter] + user_input[letter];
  }
  document.getElementById("result").innerHTML = test;
  console.log(test);
}

// remove the test from the field.
function reset() {
  var user_input = document.getElementById("input");
  user_input.value = null;
}

// other way to do the task with build in functions
function doubleCounts() {
  let user_input = document.getElementById("input").value;
  let text = user_input
    .split("")
    .map((letter) => letter.repeat(2))
    .join("");
  document.getElementById("result").innerHTML = text;
}

// 2 months : shaban, ramadan [html, CSS, javascript, boostrap, talwind, Sase, React Js]