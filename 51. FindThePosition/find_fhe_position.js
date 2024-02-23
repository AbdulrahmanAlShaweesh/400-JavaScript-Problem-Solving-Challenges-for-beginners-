// create a map contains all letters and its positions.
// get the letter from the user
// access the position of the letter
// return the position.

function getPosition(letter) {
  const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    g: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    k: 17,
    r: 18,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };
  return `Position of alphabet: ${letters[letter]}`;
}

console.log(getPosition("s"));
