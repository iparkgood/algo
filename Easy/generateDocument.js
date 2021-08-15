function generateDocument(characters, document) {
  //create object to store frequency of each unique character in the character string
  let chars = {};

  for (const val of characters) {
    chars[val] = (chars[val] || 0) + 1;
  }

  //for loop
  //compare each char in the document string
  //the object has the char then decrease the frequency
  //If not return false
  for (const val of document) {
    if (!chars[val]) {
      return false;
    }
    chars[val]--;
  }

  return true;
}

console.log(
  generateDocument("Bste!hetsi ogEAxpelrt x ", "AlgoExpert is the Best!")
);
