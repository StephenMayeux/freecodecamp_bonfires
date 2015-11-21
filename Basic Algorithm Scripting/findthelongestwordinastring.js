/* Return the length of the longest word in the provided sentence.

Your response should be a number. */

function findLongestWord(str) {
  // take each word and place it in an array
  var strArray = str.split(" ");
  // get the number of words in the array
  var arrayLength = strArray.length;
  // set longest word variable to zero
  var longestWord = 0;
  
  // iterate through the array
  for (var i = 0; i < arrayLength; i++) {
    if (strArray[i].length > longestWord) {
      // if length of current word is longer than longest word, then update longest word
      longestWord = strArray[i].length;
    }
  }
  return longestWord;
}

findLongestWord('The quick brown fox jumped over the lazy dog');