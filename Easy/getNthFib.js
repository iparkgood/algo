function getNthFib(n) {
  let fibos = [0, 1];

  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    for (let i = 2; i < n; i++) {
      fibos.push(fibos[i - 1] + fibos[i - 2]);
    }
  }

  return fibos[fibos.length - 1];
}
