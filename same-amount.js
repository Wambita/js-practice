//same amount that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.
function sameAmount(str, regex1, regex2){
    //change the reegx args  to regex obects
    regex1  = new RegExp(regex1, 'g')
    regex2 =  new RegExp(regex2, 'g')

    //match the strings with the regexs
    match1 = str.match(regex1) || [];
    match2 = str.match(regex2) || []

    return match1.length === match2.length
}

// // Example 1: Check if a string has an equal number of vowels and consonants
// const exampleString = "hello";
// const vowelsPattern = "[aeiou]";
// const consonantsPattern = "[bcdfghjklmnpqrstvwxyz]";

// const result1 = sameAmount(exampleString, vowelsPattern, consonantsPattern);
// console.log(result1);  // Output: false

// const exampleString2 = "xoxoxo";
// const xPattern = "x";
// const oPattern = "o";

// const result2 = sameAmount(exampleString2, xPattern, oPattern);
// console.log(result2);  // Output: true