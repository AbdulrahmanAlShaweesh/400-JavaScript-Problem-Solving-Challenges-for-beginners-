// get an array
// create an empty array
// loop through old array
// check if the index of the element is even
// add element to new array
// elese do nothing
function removingElements(array) {
  let newArray = [];

  array.map((str, i) => (i % 2 === 0 ? newArray.push(array[i]) : ""));
  return newArray;
}

console.log(
  removingElements(["keep", "remove", "keep", "remove", "keep", "..."])
);

// other answer using filtter
function removingEveryOtherElements(array) {

    return array.filter((x, i) => i % 2 === 0? x : '');
}

console.log(removingEveryOtherElements(["keep", "remove", "keep", "remove", "keep", "..."]))