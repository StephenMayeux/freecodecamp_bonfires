/*We'll pass you an array of two numbers. 
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first. */

function sumAll(arr) {
  
  // reduce() is one of several ways to iterate through items in an array
  var total = arr.reduce(function(a,b) {
    var max = Math.max(a,b); // find the highest number in the array
    var min = Math.min(a, b); // find the lowest number in the array
    var sum = 0;
    for (var i = min; i <= max; i++) { //start at min and loop through max
      sum += i; // accumulate the sums with each passing iteration
    }                    
    return sum; // this is a function, so you have to return a value 
 });
    
  return total; // we are returning the value from var total, which returns sum. 
  
  // In JS, one function can pass (aka return a value) to another, and another, and so on
}

sumAll([1, 4]);
