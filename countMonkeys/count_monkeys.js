// get the number n 
// create an empty array. 
// loop through n
// update the array with current number 
// return the array
function countMonkeys(n) {
    const monkeysArray = []; 

    for (let i = 1; i <= n; i++) {
        monkeysArray.push(i); 
    }

    return monkeysArray; 
}

console.log(countMonkeys(10))