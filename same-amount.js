//same amount that takes three arguments: a string, and 2 regular expressions. Your function should return a boolean.
function sameAmount(str, regex1, regex2) {
    RegEx1 = new RegExp(regex1,"g");
    RegEx2 = new RegExp(regex2,"g");

    const match1 = str.match(RegEx1);
    const match2 = str.match(RegEx2);
    return match1.length === match2.length;
}


// const data = `qqqqqqq q qqqqqqqfsqqqqq q qq  qw w wq wqw  wqw
//  ijnjjnfapsdbjnkfsdiqw klfsdjn fs fsdnjnkfsdjnk sfdjn fsp fd`
// console.log(sameAmount('12345', /[54321]/g, /[12345]/g))
// console.log(sameAmount(data, /qqqq /, /qqqqqqq/))