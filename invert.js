//invert which takes an object and returns a new one with its keys and values inverted.
function invert(obj) {
    let newObj = {}
    for (var key in obj) {
       if(obj.hasOwnProperty(key)) {
        newObj[obj[key]] = key;
       }
    }
    return newObj
}

// var obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// console.log(invert(obj))