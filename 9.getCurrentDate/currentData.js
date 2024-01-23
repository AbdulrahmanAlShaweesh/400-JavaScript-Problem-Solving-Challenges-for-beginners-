function getCurrentData() {
  let currentDate = new Date();
  let dates =
    currentDate.getFullYear() +
    "/" +
    currentDate.getMonth() +
    1 +
    "/" +
    currentDate.getDay();
  document.getElementById("continar").innerHTML = "Today's date is " + dates;
}

getCurrentData();
