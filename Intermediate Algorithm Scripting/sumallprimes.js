/* Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. 
For example, 2 is a prime number because it's only divisible by 1 and 2. 
1 isn't a prime number, because it's only divisible by itself.

The provided number may not be a prime. */

function sumPrimes(num) {
  var placeHolder = 0;
  var primes = [];
  
  for (var x = 2; x <= num; x++) {
    for (var y = 2; y <= x; y++) {
      if (x % y === 0) {
        placeHolder += 1;
      }
    }
    if (placeHolder === 1) {
      primes.push(x);
    }
    placeHolder = 0;
  }
  
var sum = 0;
for (var i in primes) {
  sum += primes[i];
}
return sum;  
}

sumPrimes(10);
