// check if the word needle is in the array, if yes then will return the needle word pluse the index
// where the word found.
function FindNeedle(hayStack) {
  for (var i in hayStack) {
    if (hayStack[i] === "needle") {
      console.log(`needle found in Position: ${i}`);
    }
  }
}

FindNeedle([
  "mohammed",
  "mahmoud",
  "sager",
  "hay",
  "jack",
  "hay",
  "needle",
  "randomjack",
]);

// other way using indexof.
function needle(hayStack) {
  return `needle found in position: ${hayStack.indexOf("needle")}`;
}

console.log(
  needle([
    "mohammed",
    "mahmoud",
    "sager",
    "hay",
    "jack",
    "hay",
    "needle",
    "randomjack",
  ])
);
