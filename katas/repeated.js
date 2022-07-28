function repeatedString(s, max) {
  const repeats = Math.ceil(max / s.length);
  return [...s.repeat(repeats)].slice(0, max).filter((v) => v === "a").length;
}

console.log(repeatedString("a", 1000000000000));
