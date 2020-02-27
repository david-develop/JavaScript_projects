// compute and return the total sum of the values in each of the arrays.

const arrays = [[1, 4], [11], [3, 5, 7]];

function findSum (array) {
  let total = 0;
  array.forEach((subarray) => {
    subarray.forEach((num) => {
      total += num;
    });
  });
  return total;
}

console.log(findSum(arrays));
