// Program containing two functions to calculate the circumference and area of a circle defined by its radius.
function circumference (radius) {
  // 2 pi r
  return (2 * Math.PI * radius);
}

function area (radius) {
  // pi * r^2
  return (Math.PI * (radius ** 2));
}

circumference(2);
circumference(12);

area(20);
area(4);
