function rotate(str) {
  const res = [];
  const strLen = str.length;
  for (x in str) {
    let newS = str.slice(-strLen + 1) + str.charAt(0);
    res.push(newS);
    str = newS;
  }
  return res;
}

// console.log(rotate("Hello"));
console.log("Hello".slice(-4) + "Hello".charAt(0));
console.log(rotate("Hello"));
