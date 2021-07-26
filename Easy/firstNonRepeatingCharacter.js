function firstNonRepeatingCharacter(string) {
  let obj = {};

  for (const val of string) {
    obj[val] = (obj[val] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstNonRepeatingCharacter("abcdcaf"));
