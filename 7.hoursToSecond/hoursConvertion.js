function hoursSecondConverter() {
  let hours = document.getElementById("hours").value;
  document.getElementById("result").innerHTML =
    hours + " hours is equal to " + hours * 3600 + " seconds";
}
