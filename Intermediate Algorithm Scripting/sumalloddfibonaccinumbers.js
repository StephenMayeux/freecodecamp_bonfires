/* Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, 
and each subsequent number is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 
because all the odd Fibonacci numbers under 4 are 1, 1, and 3. */

function sumFibs(num) {
  var array = [1];
  var a = 0, b = 1, f = 1;

  while (f <= num) {
    f = a + b;
    a = b;
    b = f;
    if (f % 2 !== 0 && f <= num) {
    array.push(f);
    }
  }
  var total = array.reduce(function(a,b) {
    return a + b;    
  });
  return total;
}

sumFibs(10);