/* Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, 
ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others. */

function palindrome(str) {
   /* take the string an convert everything to lower case letters
   we are converting to lower case because case isn't a requirement of palindromes.*/
   
   // funky code inside .replace() is a Regular Expression
   var converter1 = str.replace(/(\s|\W)*/g, "").toLowerCase();
   
   // converter2 is the reverse of converter1
   var converter2 = converter1.split('').reverse().join('');
   
   // if they are the same, then it's a palindrome!
   // triple equals means EXACT match, that's why it's important to make all lowercase
   if (converter1 === converter2) {
     return true;
   } else {
     return false;
   }
}

palindrome("A man, a plan, a canal. Panama.");