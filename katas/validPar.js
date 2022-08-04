var isValid = function (s) {
  if (s.length % 2) {
    return false;
  }
  return true;
};

console.assert(isValid("(") === false, "case 1");
console.assert(isValid("()") === true, "case 2");
console.assert(isValid("((") === false, "case 3");
