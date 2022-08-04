/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const prefix = [...strs].reduce((prev, curr) => {
    prev + curr;
    return curr;
  }, "");
  console.log(prefix);
};

console.assert(longestCommonPrefix(["alower", "blow", "floght"]) === "", 1);
console.assert(longestCommonPrefix([""]) === "", 2);
console.assert(
  longestCommonPrefix(["asdwer", "asdw", "asdght"]) === "asd",
  "asd"
);
