// create function
// create an empty arry to store the positive numbers
// create a varable to store the negative numbers.
// loop through the array.
// check if the number is positive add it to the array
// if the number if negative add the negative value to the negative variable
// return a list contain the number of poistive in the array and the total negative numbers.
function countPositive(array) {
  let negative_numbers = 0;
  let positive_numbers = [];

  for (var element in array) {
    array[element] > 0
      ? positive_numbers.push(array[element])
      : (negative_numbers += array[element]);
  }

  return [positive_numbers.length, negative_numbers];
}

console.log(
  countPositive([
    1,
    ,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    -11,
    -12,
    -13,
    -14,
    -15,
    2,
    -11,
  ])
);

// --------------------------------------- using build in function ----------------------------------------- //
function countPoitives(array) {
  return [
    array.filter((positive) => positive > 0).length,
    array
      .filter((negativeNumber) => negativeNumber < 0)
      .reduce((x, y) => x + y, 0),
  ];
}

console.log(
  countPoitives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15, 2, -11,
  ])
);
