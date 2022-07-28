function nonrepeatingCharacter(s) {
  const res = {};
  [...s].forEach((item) => {
    if (Object.keys(res).includes(item)) {
      res[item]++;
    } else {
      res[item] = 0;
    }
  });
  return res;
}

console.log(nonrepeatingCharacter("zxvczbtxyzvy"));
