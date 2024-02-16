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
