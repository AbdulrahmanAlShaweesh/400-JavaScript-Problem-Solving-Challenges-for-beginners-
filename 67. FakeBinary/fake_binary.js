// get a string of digits.
// loop through the string.
// conver each letter into the integer data type.
// check if the number less than 5
// add 0 to a new string,
// else : add 1 to a string

function fakeBinary(digit) {
  let newDigits = "";

  for (let i in digit) {
    if (Number(digit[i]) < 5) {
      newDigits += 0;
    } else {
      newDigits += 1;
    }
  }
  return newDigits;
}

console.log(fakeBinary('4567391')) // 0111010
