// check if the word needle is in the array, if yes then will return the needle word pluse the index 
// where the word found. 
function FindNeedle(hayStack) {
  for (var i in hayStack) {
    if (hayStack[i] == "needle") {
      console.log(`needle in index ${i}`);
    }
  }
}

FindNeedle(["mohammed", "mahmoud", "sager", "needle"]);
