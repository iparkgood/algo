function caesarCipherEncryptor(string, key) {
  //create string variable that stores letters
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const newKey = key % alphabets.length;
  let output = "";

  //shift each letter
  for (let i = 0; i < string.length; i++) {
    if (alphabets.indexOf(string[i]) + newKey < alphabets.length) {
      output += alphabets[alphabets.indexOf(string[i]) + newKey];
    } else {
      output +=
        alphabets[alphabets.indexOf(string[i]) + newKey - alphabets.length];
    }
  }

  return output;
}

console.log(caesarCipherEncryptor("xyz", 2));
