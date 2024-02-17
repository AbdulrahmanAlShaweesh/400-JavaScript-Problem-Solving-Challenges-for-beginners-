// get the numbers from user
// sprate them into list.
// check if the number has a squre root
// if yes, return the number.
// else : squre the number.
function squreRootOrNot() {
  let numbers = document.getElementById("numbers").value;

  document.getElementById('result').innerHTML = numbers
    .split("")
    .map((num) =>
      Number.isInteger(Math.sqrt(parseInt(num)))
        ? Math.sqrt(parseInt(num))
        : num ** num
    );
}
