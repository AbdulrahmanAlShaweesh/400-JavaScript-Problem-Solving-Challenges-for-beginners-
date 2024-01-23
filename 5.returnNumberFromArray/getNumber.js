function getNumber() {
  let array = [12, 34, 53, 56, 75, 100, 12, 23, 55, 1000];
  let index = document.getElementById("index").value;
  if (index >= 10) {
    document.getElementById("results").innerHTML =
      "Please Enter index between 0-9";
    document.getElementById("results").style.color = "red";
  } else {
    document.getElementById("results").innerHTML =
      "The number at index " + index + " is " + array[index];
    document.getElementById("results").style.color = "white";
  }
}
