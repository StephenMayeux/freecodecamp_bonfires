/* Reverse A String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string. */

function reverseString(str) {
  var strReverse = str.split('').reverse().join('');  
  return strReverse;
}

reverseString('hello');

/* First thing you need to do is transform your provided string into an array. You do that with .split('') . 
Do you notice the empty quotes inside? Play around with that and experiment.

Next, you'll want to call the .reverse() method. It takes all of the data in an array and reverses it. Simple as that. 

Now everything's been resversed, but our result must be a string. How can we transform our array back into a string? 
That's where .join('') comes into play. Also notice that it has empty quotes inside. Play around with that. 
Add a space or any letter between the quotes and see how it affects the output
*/