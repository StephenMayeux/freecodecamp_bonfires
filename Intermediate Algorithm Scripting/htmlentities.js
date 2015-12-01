/* Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), 
in a string to their corresponding HTML entities. */

// This can be rewritten with a switch/case statement

function convert(str) {
  var newString = str;
  var indexNum = 0;
  
  if (str.indexOf("&") !== -1) {
    newString = str.replace(/\u0026/g, "&amp;");
  }
  if (str.indexOf("<") !== -1) {
    newString = str.replace(/\u003C/g, "&lt;");
  }
  if (str.indexOf(">") !== -1) {
    newString = str.replace(/\u003E/g, "&gt;");
  }
  if (str.indexOf("<>") !== -1) {
    newString = str.replace(/\u003C\u003E/g, "&lt;&gt;");
  }
  if (str.indexOf("\"") !== -1) {
    newString = str.replace(/\u0022/g, "&quot;");
  }
  if (str.indexOf("\'") !== -1) {
    newString = str.replace(/\u0027/g, "&apos;");
  }
  return newString;
}

convert('<    ');