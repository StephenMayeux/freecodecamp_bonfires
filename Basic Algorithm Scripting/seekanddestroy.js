/* You will be provided with an initial array (the first argument in the destroyer function), 
followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments. */

function destroyer(arr) {
  // where we'll store our final array
  var array = [];
  // going to iterate through the first argument (initial array)
  for (var x =0; x < arguments[0].length; x++) {
    // if that value isn't the same as the additional arguments, then push to final array
    if (arguments[0][x] != arguments[1] && arguments[0][x] != arguments[2] && arguments[0][x] != arguments[3]) {
      array.push(arguments[0][x]);
    }
  }
  return array;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);