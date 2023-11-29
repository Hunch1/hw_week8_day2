//  CODE WARS PROBLEMS

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


function booleanToString(b) {
    if (b) {
        return 'true';
    } else {
        return 'false';
    }
}



// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]




function maps(x){
    const maps = [];
    for (let i = 0; i < x.length; i++) {
         maps.push(x[i] * 2);
     }
     return maps;
 }
 