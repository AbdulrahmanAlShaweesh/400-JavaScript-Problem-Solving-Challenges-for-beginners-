// get a list of numbers from the user
// check if the list empty: return empty list
// loop through the list
// multiply the list with negative
function InvertValue(numbers) {
  return numbers.length === 0 ? [] : numbers.map((number) => -number);
}

console.log(InvertValue([1, -2, -3, 4, -5]));
