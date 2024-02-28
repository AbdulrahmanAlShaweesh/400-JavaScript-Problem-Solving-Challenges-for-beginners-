// get a number.
// create an intial varable with 0 value
// loop through the number
// each time add the current number to the inital value
// .retunr the value
function GrasshopperSummation(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    sum += i;
  }

  return sum;
}
// 3 == 1 + 2 => 3
// 8 == 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 => 36
console.log(GrasshopperSummation(10));


// new way to solve the problem. 
function grasshopperSummation(num) {
  return Array(num).fill(true).reduce((acc, cureentValue, index) => acc + index+1, 0);
}

console.log(grasshopperSummation(10))