/* Compare two arrays and return a new array with any items only found in one of the original arrays. */

function diff(arr1, arr2) {
  // where we will store our values
  var newArr = [];
  
  // iterate through second array
  for (var i = 0; i < arr2.length; i++) {
    // find the index value of x in the first array
    var x = arr1.indexOf(arr2[i]);
    if (x === -1) { // if this value in arr1 is not (ie -1) in arr2, then push it to newArr
      newArr.push(arr2[i]);
    }
  }
  
  // iterate through first array and do same thing
  for (var y = 0; y < arr1.length; y++) {
    var z = arr2.indexOf(arr1[y]);
    if (z === -1) {
      newArr.push(arr1[y]);
    }
  }
  return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// This bonfire works, but it can definitely use some improvements.
// Are YOU up to the challenge?