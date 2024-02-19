// get a number in string format.
// convert into number using Number object
// return the result
function convertStringToNumber(number) {
  return Number(number);
}

console.log(typeof convertStringToNumber("1223"));
console.log(convertStringToNumber("1223.0") + 12);
console.log(parseFloat("12.0") + 12.0);
