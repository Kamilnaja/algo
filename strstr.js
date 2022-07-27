function strstr(s, x) {
  return [...s].findIndex((v) => v === x);
}

console.log(strstr("hello", "l"));
