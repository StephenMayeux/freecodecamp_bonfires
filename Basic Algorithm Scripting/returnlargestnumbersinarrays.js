/* Return an array consisting of the largest number from each provided sub-array. 
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, 
and access each member with array syntax arr[i] . */

function largestOfFour(arr) {
  // variable to store largest number of each sub array
  var finalArr = [];
  // var used to compare highest number
  var placeHolder = 0;
  
  // outer loop iterates through sub arrays
  for (var x = 0; x < arr.length; x++) {
      // inner loop interates through numbers in sub arrays
      for (var y = 0; y < arr[x].length; y++) {
        // if current number in sub array is higher than prev highest number
        if (arr[x][y] > placeHolder) {
            // set highest number
            placeHolder = arr[x][y];
        }
      }
      // after scanning through sub array, push highest number to final array
      finalArr.push(placeHolder);
      // reset high number
      placeHolder = 0;
  }
  return finalArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);