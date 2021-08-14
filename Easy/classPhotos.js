function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  //compare max to determin which team will be in back
  const redMax = redShirtHeights[redShirtHeights.length - 1];
  const blueMax = blueShirtHeights[blueShirtHeights.length - 1];

  const backTeam = redMax > blueMax ? redShirtHeights : blueShirtHeights;
  const frontTeam = redMax < blueMax ? redShirtHeights : blueShirtHeights;

  //check if all elements are bigger or smaller
  for (let i = 0; i < backTeam.length; i++) {
    const back = backTeam[i];
    const front = frontTeam[i];

    if (back <= front) return false;
  }

  return true;
}

console.log(
  classPhotos([21, 5, 4, 4, 4, 4, 4, 4, 4], [19, 2, 4, 6, 2, 3, 1, 1, 4])
);
