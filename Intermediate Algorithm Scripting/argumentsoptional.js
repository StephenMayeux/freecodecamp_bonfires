/* Create a function that sums two arguments together. If only one argument is provided, 
then return a function that expects one argument and returns the sum.

For example, add(2, 3) should return 5, and add(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = add(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined. */

function add() {
  
 var checkNum = function (num) {
        if (typeof num !== 'number'){
            return undefined;
        }else
            return num;
    };

    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {return a + b;}
    } else {
        var c = arguments[0];
        if(checkNum(c)){
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                }else {
                    return c + arg2;
                }
            };
        }
    }
}

add(2,3);
