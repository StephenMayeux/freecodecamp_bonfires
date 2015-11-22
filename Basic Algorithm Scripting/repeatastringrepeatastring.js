/* Repeat a given string (first argument) n times (second argument). 
Return an empty string if n is a negative number. */

function repeat(str, num) {
  // If the number of times to repeat string is greater than zero
  // then repeat string using .repeat() method
  if (num > 0) {
    return str.repeat(num);
  } else {
    // otherwise, return an empty string
    return "";
  }
}

repeat('abc', 3);
