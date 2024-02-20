

// get the string from user
// check if the end content exclamation Mark  using slice(-1) method
// remove it and return the rest
// else return the sentence 
function remove(string) {
    // return string.slice(-1)
    return string.slice(-1) === '!'? string.slice(0, string.length-1): string;
}

console.log(remove('!mohammed!'))