function runLengthEncoding(string) {
  let encoded = "";
  let char = string[0];
  let count = 1;

  for (let i = 1; i <= string.length; i++) {
    if (string[i - 1] !== string[i] || count === 9) {
      encoded += count + char;
      count = 0;
      char = string[i];
    }
    count++;
  }

  return encoded;
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
