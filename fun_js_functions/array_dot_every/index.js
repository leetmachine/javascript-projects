/*
Exploring the array.every() array helper function

MDN:
"the every method tests whether all elements in the array pass the test implemented by the provided function."
array.every() returns true or false.
array.every((value) => *some boolean check*)
*/

//check that all #'s are positive
exports.allPositive = function(arr) {
return arr.every((val) => val > 0);
};

//check if all values are a character (string type and length 1)
exports.isChar = function(arr) {
   return arr.every((val) => {
       return (typeof val === 'string' && val.length === 1);
   });
}

//takes an array and a value. checks if all values are divisible.
exports.isDivisible = function(arr, x) {
    return arr.every((val) => {
        return val % x === 0;
    });
}

//check if an array is ordered
exports.isOrdered = function(arr) {
    return arr.every((val, i) => {
        if(i == 0) {
            return true;
        }

        return val >= arr[i-1];
    });
}
