function getLargestNumber() {
  let number1 = document.getElementById("input-1").value;
  let number2 = document.getElementById("input-2").value;
  if (parseFloat(number1) > parseFloat(number2)) {
    document.getElementById("sum").innerHTML =
      number1 + " is larger than " + number2;
  } else {
    document.getElementById("sum").innerHTML =
      number1 + " is smaller than " + number2;
  }
}
