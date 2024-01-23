function isSumGreaterThan350() {
  let number1 = document.getElementById("number-1").value;
  let number2 = document.getElementById("number-2").value;
  let number3 = document.getElementById("number-3").value;
  let number4 = document.getElementById("number-4").value;

  // calculate the total of the fourth numbers.
  let total =
    parseFloat(number1) +
    parseFloat(number2) +
    parseFloat(number3) +
    parseFloat(number4);

  if (total > 350) {
    document.getElementById("result").innerHTML =
      "it's True " + total + " > 350";
  } else {
    document.getElementById("result").innerHTML =
      "its False " + total + " > 350";
  }
}
