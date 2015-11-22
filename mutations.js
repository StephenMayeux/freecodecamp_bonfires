/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
  // we have to ignore case, so make both arr elements upper or lower
  var arr1 = arr[0].toLowerCase();
  var arr2 = arr[1].toLowerCase();
  var test = true;
  
  // iterate through characters in 2nd argument
  for (var i = 0; i < arr2.length; i++) {
    // set n to current character in second argument
    // if n appears in first argument, it will return a number >= 0
    var n = arr1.indexOf(arr2[i]);
      // if it doesn't exist, indexOf returns -1
      if (n === -1) {
        test = false;
        // if you encounter even a single character that doesn't appear in the first argument,
        // you might as well stop the loop early with the break statement
        break;
      } else {
        // if it exists, returns true
        test = true;
      }
    }
  // I wonder if you can put these return statements in the loop and eliminate the test variable
  // test it for yourself and make a pull request if it does!!
  if (test === false) {
    return false;
  } else {
    return true;
  }
}

mutation(['hello', 'hey']);