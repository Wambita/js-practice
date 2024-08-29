function slice (input, start, end = input.length) {

    if (end  < 0) {
        end  = input.length +end 
    }
    if (start < 0) {
        start = input.length + start;
    }
    if (end  > input.length) {
        end  = input.length;
    }

    if (start > input.length || start  > end) {
        start = 0
    }

if (Array.isArray(input)) {
    let res = [];
    for (let i = start; i < end; i++) {
        res.push(input[i]);
    }
    return res;
}
if (typeof input === 'string') {
    let res = ''
    for(let i=start; i<end; i++){
        res += input[i]
    }
    return res;
}
return input
}

// console.log(slice([1, 2, 3, 4, 5], 2, 4)); // [3, 4]
// console.log(slice('Hello, World!', 6, 11)); // 'World!'
// console.log(slice('abcdef', 2)); // []
// console.log(slice('abcdef', -2))