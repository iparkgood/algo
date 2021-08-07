function binarySearch(array, target) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    const middle = Math.floor((min + max) / 2);
    const currentEl = array[middle];

    if (currentEl < target) {
      min = middle + 1;
    } else if (currentEl > target) {
      max = middle - 1;
    } else {  //if array has the target returns index
      return middle;
    }
  }

  //if there is no target in the array returns -1
  return -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33));
