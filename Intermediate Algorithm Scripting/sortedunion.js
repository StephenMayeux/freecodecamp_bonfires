// update

/* Write a function that takes two or more arrays 
and returns a new array of unique values 
in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, 
but with no duplicates in the final array.

The unique numbers should be sorted by their original order, 
but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

function unite(arr1, arr2, arr3) {
  var finalArray = [];
  
  var flattened = [arr1,arr2,arr3].reduce(function(a,b){
    return a.concat(b);
  });
  
  for (var i = 0; i < flattened.length; i++) {
    var x = finalArray.indexOf(flattened[i]);
    if (x === -1) {
      finalArray.push(flattened[i]);
    }
  } 
  
  return finalArray;
}

unite([1, 2, 3], [5, 2, 1, 4], [2, 1]);
