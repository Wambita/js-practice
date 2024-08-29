//returns the string with the first 2 characters removed.
const  cutFirst = (string) => string.substring(1, string.length)

//returns the string with the last 2 characters removed.
const  cutLast = (string) => string.substring(0, string.length-2)

//returns the string with the first 2 characters and the last 2 characters removed.
const  cutFirstLast = (string) => string.substring(2, string.length-2)

//keepFirst returns only the first 2 characters.
const  keepFirst = (string) => string.substring(0,2)


//keepLast returns only the last 2 characters
const  keepLast = (string) => string.substring(string.length-2,string.length)

//keppFirstLast returns the first 2 characters, and the last 2 characters.
function keepFirstLast(string) {
    return  keepFirst(string)+ keepLast(string)  // concatenate the first two and last two characters.
}


// console.log(cutFirst("taeyon"))
// console.log(cutLast("taeyon"))
// console.log(cutFirstLast("taeyon"))
// console.log(keepFirst("taeyon"))
// console.log(keepLast("taeyon"))
// console.log(keepFirstLast("taeyon"))