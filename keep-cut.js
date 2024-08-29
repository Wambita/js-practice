
//returns the string with the first 2 characters removed.
const  cutFirst = (string) => (string.length <= 2 ) ? '': string.substring(2)

//returns the string with the last 2 characters removed.
const  cutLast = (string) =>  (string.length <= 2 ) ? '': string.substring(0, string.length-2)

//returns the string with the first 2 characters and the last 2 characters removed.
const  cutFirstLast = (string) =>  (string.length <= 4 ) ? '': string.substring(2, string.length-2)

//keepFirst returns only the first 2 characters.
const  keepFirst = (string) =>  (string.length <= 2 ) ?  string :string.substring(0,2)


//keepLast returns only the last 2 characters
const  keepLast = (string) => (string.length <= 2 ) ?  string: string.substring(string.length-2,string.length)

//keppFirstLast returns the first 2 characters, and the last 2 characters.
const  keepFirstLast = (string)  =>  (string.length <= 4) ? string :  keepFirst(string)+ keepLast(string) 
 // if string length is less than 2, return an empty string.
  // concatenate the first two and last two characters.



 console.log(cutFirst('abcdef'))
console.log(cutLast("taeyon"))
console.log(cutFirstLast("af"))
console.log(keepFirst("taeyon"))
console.log(keepLast("taeyon"))
console.log(keepFirstLast("taeyon"))