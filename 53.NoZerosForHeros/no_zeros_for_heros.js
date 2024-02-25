// get a number
// check if the number contains a zero at the end.
// return the number with out the zero
function noBoaringZero(number) {
  while (number.toString().endsWith("0")) {
    number.toString().replace("0", "");
  }

  return number.toString();

  // return  number.toString().lastIndexOf(0) === number.toString().length - 1? number.toString().slice(0, number.toString().length - 1): Number(number);
}

console.log(noBoaringZero(23230000));
