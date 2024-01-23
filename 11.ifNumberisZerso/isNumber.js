function isNumber() {
  let isNumbers = document.getElementById("number").value;
  console.log(typeof isNumbers);

  if (parseFloat(isNumbers) == 0) {
    document.getElementById("result").innerHTML = "True";
  } else {
    document.getElementById("result").innerHTML = "False";
  }
}
