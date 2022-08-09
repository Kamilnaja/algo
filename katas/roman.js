var intToRoman = function (num) {
  const lessThan10 = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
  };
  return lessThan10[num];
};

console.assert(intToRoman(1) === "I", 1);
console.assert(intToRoman(10) === "X", 2);
console.assert(intToRoman(100) === "C", 3);
console.assert(intToRoman(1000) === "M", 4);
