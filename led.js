function rotate(str) {
  const res = [];

  [...str].map((_, i) => {
    return str.slice(1) + str.slice(0, 1);
  });
}

console.log(rotate("Hello"));
