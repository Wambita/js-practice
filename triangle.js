function triangle(char, depth) {
let res = ''
for (var i = 1; i<=depth; i++) {
    res += char.repeat(i) + '\n'
    // res += '\n'
}
return res
}
//console.log(triangle("*", 5))