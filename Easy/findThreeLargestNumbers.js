function findThreeLargestNumbers(array) {
  // while (array.length !== 3) {
  //   array.splice(array.indexOf(Math.min(...array)), 1);
  // }

  // return array.sort((a, b) => a - b);
  let largestNums = [];

  while (largestNums.length !== 3) {
    const max = Math.max(...array);
    largestNums.unshift(max);
    array.splice(array.indexOf(max), 1);
  }

  return largestNums;
}

console.log(
  findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])
);
