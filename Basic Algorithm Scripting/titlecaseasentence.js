/* Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
  // place individual words from string into an array
  str = str.split(" ");
  // create array for final array
  var finalString = [];
  //iterate through each word in str array
  for (var i = 0; i < str.length; i++) {
    //capitalize fist letter of word and join it with the remaining letters, which are lowercase
    finalString[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1).toLowerCase();
  }
  // take words from array and join them in a string. add spaces between words
  finalString = finalString.join(" ");
  return finalString;
}

titleCase("I'm a liTtle tea pot");