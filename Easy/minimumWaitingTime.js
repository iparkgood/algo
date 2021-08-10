function minimumWaitingTime(queries) {
  let total = 0;
  queries.sort((a, b) => a - b);

  for (let i = 1; i < queries.length; i++) {
    for (let j = 0; j < i; j++) {
      total += queries[j];
    }
  }

  return total;
}

console.log(minimumWaitingTime([3, 2, 1, 2, 6]));
