/* Return the remaining elements of an array after chopping off n elements from the head.

The head meaning the beginning of the array, or the zeroth index */

function slasher(arr, howMany) {
  // You'll want to omit or SLASH the beginning of the array
  // you'll stop slashing at the index determined by howMany 
  var slashedArray = arr.splice(howMany);
  return slashedArray;
}

slasher([1, 2, 3], 2);
