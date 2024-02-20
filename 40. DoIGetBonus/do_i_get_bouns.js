
function getBonus(salary, bonus) {
    return bonus? `£${salary * 10}`: `${salary}`;
}
console.log(getBonus(10, true))