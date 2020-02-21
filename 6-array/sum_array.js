const values = [3, 11, 7, 2, 9, 10];

function sumArray (values) {
  let sum = 0;
  values.forEach((num) => { sum += num; });
  return sum;
}

console.log(sumArray(values));
