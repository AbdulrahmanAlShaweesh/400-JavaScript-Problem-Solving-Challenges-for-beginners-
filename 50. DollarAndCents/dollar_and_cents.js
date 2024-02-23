// get the number per dollars. 
// formated into two decimal points. 
function dollarAndCents(amount) {
    return `$${Number(amount.toFixed(2))}`
}

console.log(dollarAndCents(12.2))