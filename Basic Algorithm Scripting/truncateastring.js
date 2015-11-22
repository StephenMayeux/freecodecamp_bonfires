/* Truncate a string (first argument) if it is longer than the given maximum string length (second argument). 
Return the truncated string with a "..." ending.

Note that the three dots at the end add to the string length.

If the length of the string is less than or equal to 3 characters, 
then the length of the three dots is not added to the string length. */

function truncate(str, num) {
  // Declare an empty string here, or later in the conditional
  var finalStr = "";
  
  // if the 2nd argument is shorter than string, we must truncate string
  if (num < str.length) {
    // so cut string and add '...'
    finalStr = str.substr(0,8) + "...";
    return finalStr;
  } else {
    // otherwise just return the string  
    return str;
  }
}

truncate('A-tisket a-tasket A green and yellow basket', 11);
