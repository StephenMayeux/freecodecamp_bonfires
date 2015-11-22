/*Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, where([20,3,5], 19) should return 2 because it is less than 20 (index 2) and greater than 5 (index 1).*/

function where(arr, num) {
  // add the num argument to the array in first argument
  arr.push(num);
  // the sort() method orders things by Unicode value
  // not useful to us because in unicode 10 is less than 2
  // so we need to a short function in our sort method to sort by numerical value
  // and not by Unicode value
  arr.sort(function(a,b) {
    return a - b;
  });
  // now return the first index of num
  return arr.indexOf(num);
}
where([2, 20, 10], 19);
