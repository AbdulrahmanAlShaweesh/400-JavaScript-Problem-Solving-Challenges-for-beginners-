
// get the name 
// get the first letter and use uppercase 
// check if the first letter is r or R. 
// return name playing bunjo 
// else return name does not playing bungo. 

function areYouPlayingBanjo(name) {
    return name.slice(0, 1).toUpperCase() === 'R'? `${name} is playing Bunjo`: `${name} does not playing Bungo`;
}

console.log(areYouPlayingBanjo('muahhmed'))