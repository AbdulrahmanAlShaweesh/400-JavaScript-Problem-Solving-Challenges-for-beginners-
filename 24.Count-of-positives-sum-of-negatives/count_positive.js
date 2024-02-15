function countPositive(array) {
  let counter = 0;
  negative_value = 0;
  var result = [];

  for (var element in array) {
    array[element] < 0 ? negative_value += array[element] : counter += 1;
  }
  result.push(counter);
  result.push(negative_value);

  return result;
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
