//fold that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the left.
function fold(arr, func, acc) {
    for (var i = 0; i < arr.length; i++) {
        acc = func (acc, arr[i], i, arr)
    }
    return acc
}

//foldRight that receives an array, a function and an accumulator, in this order, and applies the function in the elements of the array starting on the right.
function foldRight(arr, func, acc) {
    for (var i = arr.length - 1; i >= 0; i--) {
        acc = func (acc, arr[i], i, arr)
    }
    return acc
}

//reduce that works just like the method [].reduce when you don't specify an accumulator. 
function reduce(arr, func) {
    let res = arr[0]
    for (var i = 1; i < arr.length; i++) {
        res = func(res, arr[i], i, arr)
    }
    return res
}

//reduceRight like reduce, from the last value to the first
function reduceRight(arr, func) {
    let res = arr[arr.length - 1]
    for (var i = arr.length - 2; i >= 0; i--) {
        res = func(res, arr[i], i, arr)
    }
    return res
}

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(fold(arr, (num)=> num %2 === 0))
// console.log(foldRight(arr, (num)=> num %2 === 0))
// console.log(reduce(arr, (num)=> num %2 === 0))
// console.log(reduceRight(arr, (num)=> num %2 === 0))