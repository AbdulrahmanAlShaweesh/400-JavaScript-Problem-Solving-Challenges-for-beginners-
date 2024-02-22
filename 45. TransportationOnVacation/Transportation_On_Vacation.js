// get the number of days.
// check if the number of days is 7 days or more get a 50% off
// else if the number of day is 3 or more get 20$ of
// else get 0 off
// return the total
function TransportationOnVacation(days) {
  let price = 40;
  let total = 1;

  if (days >= 7) {
    total = (days * price) - 50;
  }else if(days >= 3) {
    total = (days * price) - 20;
  }

  return `The total is ${total}$`;
}

console.log(TransportationOnVacation(7));
