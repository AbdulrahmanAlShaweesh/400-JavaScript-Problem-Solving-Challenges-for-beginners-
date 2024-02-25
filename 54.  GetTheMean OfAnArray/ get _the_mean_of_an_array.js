// get the students marks in an array.
// loop through the array
// sum the numbers of the array and store them in a varaiable.
// divide the totl with the total of subjects
// return the mean.
function getMean(marks) {
  return marks.reduce((n1, n2, i) => n1 + n2) / marks.length;
}

console.log(getMean([1, 2, 3, 4]));

// way 2 : using loop

function gettingMean(marks) {
  let total = 0;

  for (let i in marks) {
    total += marks[i];
  }
  return total / marks.length; 
}

console.log(gettingMean([1, 2, 3, 4]))

// way : 3 using map function
function getStudentsMean(marks) {
    let total = 0; 

   return marks.map((mark, index) => total += marks[index]).slice(-1) / marks.length;
}

console.log(getStudentsMean([1, 2, 3, 4]))
