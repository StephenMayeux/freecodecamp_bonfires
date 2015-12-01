/* Flatten a nested array. You must account for varying levels of nesting. */

function steamroller(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten); 
  }, []);
}

steamroller([1, [2], [3, [[4]]]]);
