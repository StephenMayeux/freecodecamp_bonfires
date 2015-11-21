/* Return the factorial of the provided integer.

If the integer is represented with the letter n, 
a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/

function factorialize(num) {
  /* Create a variable for the final answser. 
  Must contain a number or the function will return NaN (not a number)
  Can't start with 0 or your final answer will be 0.
  Since anything multiplied by 1 is the same, just start with 1 */
  var answer = 1;
  
  // start a for-loop
  for (var x = 2; x <= num; x++) {
      answer *= x; // same as answer = answer * x
  }
  return answer;
}

factorialize(5);