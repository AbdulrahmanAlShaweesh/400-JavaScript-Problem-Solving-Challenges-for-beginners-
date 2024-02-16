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
