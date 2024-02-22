// get the two bool values b and b
// check if both are false
// return false
// if a is false and b is true
// return true
// else if a is true and b is false
// return true
// else
// return false
function exclisoveXOrOpearotrs(a, b) {
  if (a === false && b === false) {
    return false;
  } else if (a === false && b === true) {
    return true;
  } else if (a === true && b === false) {
    return true;
  } else {
    return false;
  }
}

console.log(exclisoveXOrOpearotrs(true, false));

// other answer using pernery operators 
function xOr(a, b) {
    return a === b? false : true;
}
console.log(exclisoveXOrOpearotrs(false, false));