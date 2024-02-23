// get the floors pertal for sarah and yimmy. 
// check if one is even and other is odd 
// return they are in love. 
// else 
// return the are not in love.
function loveFunction(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2? true: false;
}

console.log(loveFunction(101, 166))