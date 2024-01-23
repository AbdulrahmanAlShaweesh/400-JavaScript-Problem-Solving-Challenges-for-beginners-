function isNumber() {
  let data = document.getElementById("data").value;

  if (!isNaN(data)) {
    document.getElementById("result").innerHTML = "its a number";
  } else {
    document.getElementById("result").innerHTML = "its not a number";
  }
}
