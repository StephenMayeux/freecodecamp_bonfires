/* Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
  var currentChar = 0;
  var nextChar = 0;
  var missing = "";
  
  for (var x = 0; x < str.length; x++) {
    var y = x + 1;
    currentChar = str.charCodeAt(x);
    nextChar = str.charCodeAt(y);
    if (nextChar > (currentChar+1)) {
      var z = currentChar + 1;
      missing = String.fromCharCode(z);
      return missing;
    }
  }
  return undefined;
}

fearNotLetter('abce');
