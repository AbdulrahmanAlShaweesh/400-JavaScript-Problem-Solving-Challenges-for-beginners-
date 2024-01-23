function convertAgeIntoDays() {
  let ageInYear = document.getElementById("age").value;
  let ageInDays = ageInYear * 365;
  document.getElementById("results").innerHTML =
    "You age in days is : " + ageInDays + " days";
}
