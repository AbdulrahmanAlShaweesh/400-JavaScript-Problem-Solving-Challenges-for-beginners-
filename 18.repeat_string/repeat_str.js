// create inital string
// create loop to loop using number of text need to repeat
// add the disert text to the inital string.
function repeatString(text, n) {
    let inttext = '';
    for (let i = 0; i < n; i++) {
      inttext += text;
    }
    console.log(inttext)
}

repeatString("Hello", 4);

// doing the same task using repeat function 
function repeatText(n, text) {
    return console.log(text.repeat(n));
}

console.log(repeatText(10, 'Abdulrahman'))
