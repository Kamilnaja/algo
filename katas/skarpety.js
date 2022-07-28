function sockMerchant(n, arr) {
  let res = arr.reduce((allNames, item) => {
    if (item in allNames) {
      allNames[item]++;
    } else {
      allNames[item] = 1;
    }
    return allNames;
  }, {});

  return Object.entries(res)
    .filter((v) => v[1] > 1)
    .reduce(countBiggerThan2, 0);
}

const countBiggerThan2 = (x, y) => Math.floor((x += y[1] / 2));

const res = sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]);
console.log(res);
