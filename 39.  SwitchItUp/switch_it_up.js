// get the number from the user.
// using switch and pass the number as a paremter.
// check cause 1 : reutn 1
// case 2 :3
// defult

function switchItUp(number) {
  switch (number) {
    case 0:
      return "Zero";
      break;
    case 1:
      return "One";
      break;
    case 2:
      return "Two";
      break;
    case 3:
      return "Three";
      break;
    case 4:
      return "Four";
      break;
    case 5:
      return "Five";
      break;
    case 6:
      return "Six";
      break;
    case 7:
      return "Seven";
      break;
    case 8:
      return "Eight";
      break;
    case 9:
      return "Nine";
      break;
    default:
      return "Provide a number between 0-9";
      break;
  }
}

console.log(switchItUp(0));

// other answer using if conditions.
function SwitchItUP(number) {
  if (number === 0) {
    return "Zero";
  } else if (number === 1) {
    return "One";
  } else if (number === 2) {
    return "Two";
  } else if (number === 3) {
    return "Three";
  } else if (number === 4) {
    return "Four";
  } else if (number === 5) {
    return "Five";
  } else if (number === 6) {
    return "Six";
  } else if (number === 7) {
    return "Seven";
  } else if (number === 8) {
    return "Eight";
  } else if (number === 9) {
    return "Nine";
  } else {
    return "Wrrone number provided!";
  }
}

console.log(SwitchItUP())
