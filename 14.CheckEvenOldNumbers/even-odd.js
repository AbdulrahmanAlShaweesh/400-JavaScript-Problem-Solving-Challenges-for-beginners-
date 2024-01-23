//  this function check if user enter even or odd number.
// using function and if statements.
function evenOddNumber(value) {
  if (value % 2 == 0) {
    document.getElementById(
      "user-input"
    ).innerHTML = `The number ${value} is even number`;
  } else {
    document.getElementById(
      "user-input"
    ).innerHTML = `The number ${value} is odd number`;
  }
}

// -------------------------------------------------------------

// evenOddNumber(11);
// Other way using terniery operators.
function evenOddNumbers(number) {
  number % 2 == 0
    ? (document.getElementById(
        "user-input"
      ).innerHTML = `The number ${number} is even number`)
    : `The number ${number} is even number`;
}

evenOddNumbers(12)