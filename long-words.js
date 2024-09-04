//longWords: returns true if every element of the array is a string with at least 5 characters.
function longWords(arr) {
    return arr.every(word => typeof word === 'string' && word.length >= 5);
}

//oneLongWord: returns true if at least one element of the array is a string with 10 or more characters.
function oneLongWord(arr) {
    return arr.some(word => typeof word === 'string' && word.length >= 10);
}

//noLongWords: returns true if there are no elements in the array which is a string with at least 7 characters.
function noLongWords(arr) {
    return arr.every(word => typeof word !== 'string' || word.length < 7);
}

// //examples
// console.log(longWords(['hello', 'world', 'apple', 'banana'])); // true
// console.log(oneLongWord(['hello', 'encyclopedia', 'apple', 'banana'])); // true
// console.log(noLongWords(['cat', 'dog', 'fish', 'bird'])); // true