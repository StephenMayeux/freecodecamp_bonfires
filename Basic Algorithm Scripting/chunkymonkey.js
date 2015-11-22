/* Write a function that splits an array (first argument) into groups the length of size (second argument) 
and returns them as a multidimensional array. */

function chunk(arr, size) {
  // This is the array where we'll store the answer
  var newArray = [];
  // iterate through the loop, increment by the size of 2nd argument
  for(var i = 0; i < arr.length; i += size) {
    // var slice is an array, which is a chunk from first array
    var slice = arr.slice(i, i + size);
    // push slice(sub array) into our new array
    newArray.push(slice);
  }
  return newArray;
}

chunk(['a', 'b', 'c', 'd'], 2);