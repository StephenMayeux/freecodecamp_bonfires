/* Translate the provided string to pig latin. 
Pig Latin takes the first consonant (or consonant cluster) of an English word, 
moves it to the end of the word and suffixes an "ay".
If a word begins with a vowel you just add "way" to the end. */

function translate(str) {
  // convert given string to array
  str = str.split("");
  // where we'll store our final answer
  var final = [];
  
  if (/[aeiou]/.test(str[0])) { // if first letter is a vowel, add 'way' to word
    str.push("way");
    str = str.join("");
  } else if (/[bcdfghjklmnpqrstvwxyz]/.test(str[0]) && /[aeiou]/.test(str[1])) {
    str.push(str[0]);
    str = str.slice(1);
    str.push("ay");
    str = str.join("");
  } else if (/[bcdfghjklmnpqrstvwxyz]/.test(str[0]) && /[bcdfghjklmnpqrstvwxyz]/.test(str[1])) {
    str.push(str[0]);
    str.push(str[1]);
    str = str.slice(2);
    str.push("ay");
    str = str.join("");
  }
  return str;
}

translate("consonant");
