function getNthFib(n) {
  let fibos = [0, 1];
  let counter = 3;

  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    while (counter <= n) {
      const next = fibos[0] + fibos[1];
      fibos[0] = fibos[1];
      fibos[1] = next;
      counter++;
    }
  }

  return fibos[1];
}

console.log(getNthFib(9));