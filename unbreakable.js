function split(string, sep) {
    const result = []

    // if (sep === ''){
    //     for (let i = 0; i < string.length; i++) {
    //         result.push(string[i])
    // }
    // return result
}

let word = ''
let i = 0

while(i < string.length) {
    if (string.slice(i, i+sep.length) === sep && sep.length > 0) {
        result.push(word)
        word = ''
        i += sep.length
    } else {
        word += string[i]
        i++   
}
}
result.push(word)
return result
}

function join(arr, sep) {
    let result = ''
    for (var i = 0; i < arr.length; i++) {
        if (i>0){
            result += sep
        }
        result += arr[i]
    }
    return result;
}


//   console.log(split('hello world', ' ')); // ['hello', 'world']
//   console.log(join(['hello', 'world'], ' ')); // 'hello world'
//   console.log(split('hello,world,this,is,a,test', ',')); // ['hello', 'world', 'this', 'is', 'a', 'test']
//   console.log(join(['hello', 'world', 'this', 'is', 'a', 'test'], '-')); // 'hello-world-this-is-a-test'
//   console.log(split('one-two-three', '-')); // ['one', 'two', 'three']
//   console.log(join(['one', 'two', 'three'], '+')); // 'one+two+three'
//   console.log(split('ggg - ddd - b', ' - ')); // ['ggg', 'ddd', 'b']
//   console.log(split('ee,ff,g,', ',')); // ['ee', 'ff', 'g', '']
//   console.log(split('Riad', '')); // ['R', 'i', 'a', 'd']