function findSquare(obj) {
  console.log(obj);
  const { x, y } = obj;
  if (x !== y) {
    return findSquare({ x: x - obj.y, y });
  }
  return obj.x;
}
const obj = { x: 1680, y: 640 };
console.log(findSquare(obj));
