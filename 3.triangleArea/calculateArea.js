/* Calculate the area of the circle */
function area(base, height) {
  return (1 / 2) * height * base; // calculated and return the area of triangle
}

let areaCircle = area(10, 23);

document.getElementById("result").innerHTML = "Area: " + areaCircle;
console.log(areaCircle);
