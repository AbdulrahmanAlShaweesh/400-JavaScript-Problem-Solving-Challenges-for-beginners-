/* 
    Calculate The average of 10 numbers 
*/
function averageNumber() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let total = 0;

  for (let number = 0; number < numbers.length; number++) {
    total += numbers[number]; // calculate the total of 10 numbers
  }

  // return the average of the 10 numbers.
  return total / numbers.length;
}

let average = averageNumber();
document.getElementById("results").innerHTML = "Average is: " + average;
