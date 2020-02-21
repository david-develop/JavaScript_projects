function maxElement (values) {
  var max = values[0];
  values.forEach((num) => {
    if (num > max) {
      max = num;
    }
  });
  return max;
}

const values = [3, 11, 7, 2, 9, 10];

console.log(maxElement(values));
