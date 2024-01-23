// this function is used to calculate the sum of two numbers.
function models() {
  //   let total = 0;
  let number1 = document.getElementById("input-1").value;
  let number2 = document.getElementById("input-2").value;
  let remindar = parseFloat(number1) % parseFloat(number2);
  document.getElementById("sum").innerHTML =
    "The remindary of " + number1 + " % " + number2 + " is " + remindar;
}
