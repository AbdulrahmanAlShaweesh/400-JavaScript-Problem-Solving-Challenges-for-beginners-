// get the number of hours
// multiply the hourse by 0.5
// store the value in varable.
// raound the value to a small value
// return the result
function keepHydrated(hours) {
  // return the result.
  return `The total watter need to drike to keep hydrated is "${Math.floor(
    hours * 0.5
  )}" liters`;
}

console.log(keepHydrated(11.8));
