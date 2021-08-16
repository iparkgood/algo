function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);

  fastest
    ? blueShirtSpeeds.sort((a, b) => b - a)
    : blueShirtSpeeds.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    const red = redShirtSpeeds[i];
    const blue = blueShirtSpeeds[i];

    sum += Math.max(red, blue);
  }

  return sum;
}

console.log(tandemBicycle([5, 5, 3, 9, 2], [3, 6, 7, 2, 1], false));
