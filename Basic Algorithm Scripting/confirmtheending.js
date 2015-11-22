/* Free Code Camp tests have been updated since I completed this bonfire. 
The following code will pass all but one of the tests */

function end(str, target) {
  var strArray = str.split(" ");
  var lastIndex = strArray.length - 1;
 
  if (target.length === 1) {
    if (str.substr(str.length-1) === target) {
      return true;
    } else {
      return false;
    }
  } else {
    if (strArray[lastIndex] === target) {
      return true;
    } else {
      return false;
    }        
  } 
}

end('Bastian', 'n');
