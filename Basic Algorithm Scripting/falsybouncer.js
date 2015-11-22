/* Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.*/

function bouncer(arr) {
  // where we will store our truthy values
  var finalArr = [];
  
  // FCC recommends the .filter() method, but I prefer the forEach()
  // forEach takes each index an array and runs that value through some code
  arr = arr.forEach(function(value) {
    // if the current value is true i.e. not a falsy value
    if (value) {
      // then push that truthy value to our new array
      finalArr.push(value);
    }
  });
  return finalArr;
}

bouncer([7, "ate", "", false, 9]);
