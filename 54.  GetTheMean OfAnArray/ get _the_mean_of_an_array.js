// get the students marks in an array.
// loop through the array
// sum the numbers of the array and store them in a varaiable.
// divide the totl with the total of subjects
// return the mean.
function getMean(marks) {
  let total = 0;
  return marks.reduce((n1, n2, i) => n1 + n2) / marks.length;
}

console.log(getMean([1, 2, 3, 4]));
