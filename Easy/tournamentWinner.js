function tournamentWinner(competitions, results) {
  let scores = {};

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      if (scores.hasOwnProperty(competitions[i][1])) {
        scores[competitions[i][1]] += 3;
      } else {
        scores[competitions[i][1]] = 3;
      }
    } else {
      if (scores.hasOwnProperty(competitions[i][0])) {
        scores[competitions[i][0]] += 3;
      } else {
        scores[competitions[i][0]] = 3;
      }
    }
  }

  for (const prop in scores) {
    if (scores[prop] === Math.max(...Object.values(scores))) {
      return prop;
    }
  }
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
