function triangle(char, depth) {
let res = ''
for (var i = 1; i<=depth; i++) {
    res += char.repeat(i) 
    if (i !== depth) {
        res += '\n'
    }
}
return res
}
// console.log(triangle("*", 5))
// //Recursion function

// function triangle(char, depth) {
//     //base 
//     if (depth <= 0){
//         return ''
//     }
// //recursion function
//     const smallTriangle = triangle(char, depth -1)
//     const currLine =  char.repeat(depth)

//     return smallTriangle +  currLine + '\n'
// }