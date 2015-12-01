/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.*/

function spinalCase(str) {
  var x = str.indexOf(" ");
  var y = str.indexOf("_");
  
  
  if (x !== -1) {
    str = str.toLowerCase().split(" ").join("-");
  } else if (x === -1) {
    if (y !== -1) {
      str = str.toLowerCase().split("_").join("-");
    } else {
      str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ').toLowerCase().split(" ").join("-");
    }   
  }
  return str;
}

spinalCase('thisIsSpinalTap');