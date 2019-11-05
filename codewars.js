// codewars
// Love vs friendship
function wordsToMarks(string){
  let tempArray = string.split("");
  let stringValue = 0;
  let letterValue = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  }
  for (let i = 0; i < tempArray.length; i++) {
    stringValue += letterValue[tempArray[i]];
  };
  return stringValue;
};

// console.log(wordsToMarks('athlete'));

function nbYear(p0, percent, aug, p) {
  let totalYears;
  for (let i = 1; p0 < p; i++) {
    p0 += p0*(percent*0.01);
    p0 += aug;
    console.log(p0);
    totalYears = i;
    console.log(totalYears);
  };
  return totalYears;
};
console.log(nbYear(150, 5, 100, 2000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
