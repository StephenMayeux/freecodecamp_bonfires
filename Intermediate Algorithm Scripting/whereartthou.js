// update to pass all tests

function where(collection, source) {
  var arr = [];
  
  for (var item in collection) {
    if (collection[item].last === source.last) {
      arr.push(collection[item]);
    }
  }
  
  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
