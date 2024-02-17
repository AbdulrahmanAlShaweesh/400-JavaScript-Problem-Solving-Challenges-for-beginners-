// get the math operation
// get number 1
// get number 2
// apply the operation on the numbers
function mathOperations() {
  let number1 = document.getElementById("number1").value;
  let number2 = document.getElementById("number2").value;
  let operation = document.getElementById("operator").value;

  if (operation === "+") {
    document.getElementById(
      "result"
    ).innerHTML = `${number1} ${operation} ${number2} = ${
      parseFloat(number1) + parseFloat(number2)
    }`;
  } else if (operation === "-") {
    document.getElementById(
      "result"
    ).innerHTML = `${number1} ${operation} ${number2} = ${
      parseFloat(number1) - parseFloat(number2)
    }`;
  } else if (operation === "*") {
    document.getElementById(
      "result"
    ).innerHTML = `${number1} ${operation} ${number2} = ${
      parseFloat(number1) * parseFloat(number2)
    }`;
  } else if (operation === "/") {
    document.getElementById(
      "result"
    ).innerHTML = `${number1} ${operation} ${number2} = ${
      parseFloat(number1) / parseFloat(number2)
    }`;
  } else {
    document.getElementById("result").innerHTML =
      "Please enter a valid operator e.g : '+, -, *, /'";
  }
}

function reset() {
  let number1 = document.getElementById("number1");
  let number2 = document.getElementById("number2");
  let operation = document.getElementById("operator");

  number1.value = null;
  number2.value = null;
  operation.value = null;
}

// other way of solving the problem.
function cal(op, num1, num2) {
  return eval(num1 + op + num2);
}

console.log(cal("+", 12, 33));
