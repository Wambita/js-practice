// map function that takes an array as the first argument, a function as second, and that works like the method .map

function map(arr, func){
    let res = []
    for (let i=0; i<arr.length; i++){
        res.push(func(arr[i], i, arr))
    }
    return res
}


// flatMap function that takes an array as the first argument, a function as second, and that works like the method .flatMap
function flatMap(arr, func){
    return arr.reduce((acc, curr,i, arr) => acc.concat(func(curr, i, arr)), [])
}

//usage
//console.log(map([1,2,3], (num) => num +1))
//console.log(flatMap([1,2,3], (num) => [num +1, num * 2]))