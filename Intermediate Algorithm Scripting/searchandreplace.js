// redo this code

function replace(str, before, after) {
  var indexBefore = before.charAt(0);
  var indexAfter = after.charAt(0);
  var afterFinal = [];
  if (indexBefore === indexBefore.toLowerCase() && indexAfter === indexAfter.toLowerCase()) {
    str = str.replace(before,after);
  } else if (indexBefore === indexBefore.toUpperCase() && indexAfter === indexAfter.toUpperCase()) {
    str = str.replace(before,after);
  } else if (indexBefore === indexBefore.toUpperCase() && indexAfter === indexAfter.toLowerCase()) {
    afterFinal.push(after.charAt(0).toUpperCase());
    afterFinal.push(after.slice(1).toLowerCase());
    afterFinal = afterFinal.join("");
    str = str.replace(before,afterFinal);
  }
  return str;
}

replace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
