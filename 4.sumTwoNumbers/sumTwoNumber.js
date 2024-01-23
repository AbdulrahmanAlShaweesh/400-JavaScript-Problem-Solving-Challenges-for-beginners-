// this function is used to calculate the sum of two numbers.
function sumTwoNumbers() {
  //   let total = 0;
  let number1 = document.getElementById("input-1").value;
  let number2 = document.getElementById("input-2").value;
  let total = parseFloat(number1) + parseFloat(number2);
  document.getElementById("sum").innerHTML = "The sum of " + number1 + " and " + number2 + " is " + total;
}
