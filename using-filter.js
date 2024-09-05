//filterShortStateName: accepts an array of strings, and returns only those strings which contain less than 7 characters.
function filterShortStateName(arr){
    return arr.filter(name => name.length < 7)
}

//filterStartVowel: accepts an array of strings, and returns only those that start with any vowel (a,e,i,o,u).
function filterStartVowel(arr){
    return arr.filter(name => ['a', 'e', 'i', 'o', 'u'].includes(name[0].toLowerCase()))
}

//filter5Vowels: accepts an array of strings, and returns only those which contain at least 5 of any vowels (a,e,i,o,u).
function filter5Vowels(arr){
    return arr.filter(name => 
        name.toLowerCase().split('').filter
        (char => ['a', 'e', 'i', 'o', 'u']
        .includes(char)).length >= 5)
}

//filter1DistinctVowel: accepts an array of strings, and returns only those which contain only one distinct vowel (a,e,i,o,u). For example, "Alabama" contains only 1 distinct vowel "a".
function filter1DistinctVowel(arr){
const  vowels = 'aeiou'

function hasOneDistinctVowel(str){
    const uniqueVowel = new Set()

    for (const char of str.toLowerCase()){
        if (vowels.includes(char)){
            uniqueVowel.add(char)
        }
    }
    return uniqueVowel.size === 1
}
return arr.filter(hasOneDistinctVowel)
}

// multiFilter: accepts an array of objects, and returns only those which:
// the key capital contains at least 8 characters.
// the key name does not start with a vowel.
// the key tag has at least one vowel.
// the key region is not "South"

function multiFilter(arr){
function startWithVowel(str){
    return /^[aeiou]/i.test(str)
}

function hasVowel(str){
    return /[aeiou]/i.test(str)
}

    return arr.filter(obj =>  {
        return obj.capital && obj.capital.length >= 8 &&
        obj.name && !startWithVowel(obj.name) && 
        obj.tag && hasVowel(obj.tag) &&
        obj.region && obj.region!== 'South'  ;
    })
}
// Example usage
// const data = [
//     { capital: 'Washington', name: 'Seattle', tag: 'Aero', region: 'West' },
//     { capital: 'New York City', name: 'Albany', tag: 'Economics', region: 'North East' },
//     { capital: 'Los Angeles', name: 'Orange', tag: 'Technology', region: 'South' },
//     { capital: 'Chicago', name: 'Evanston', tag: 'Finance', region: 'Midwest' },
//     { capital: 'Austin', name: 'Dallas', tag: 'Retail', region: 'South' },
//     { capital: 'Denver', name: 'Boulder', tag: 'Health', region: 'West' }
// ];

// console.log(multiFilter(data));

// // Example usage
// console.log(filter1DistinctVowel([
//     'Alabama',    // Contains only vowel 'a'
//     'Banana',     // Contains vowels 'a' 
//     'Orange',     // Contains vowels 'o' and 'e'
//     'Apple',      // Contains vowels 'a' and 'e'
//     'Eagle',      // Contains vowels 'a' and 'e'
//     'Indigo',     // Contains vowels 'i' and 'o'
//     'Oregano',    // Contains vowels 'o' and 'e'
//     'Umbrella'    // Contains vowels 'u' and 'e'
// ]));
