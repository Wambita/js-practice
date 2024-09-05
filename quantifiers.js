//every: every element in the array respects the condition of the function.
function every(arr, func){
    for (let i=0; i<arr.length; i++){
        if (!func(arr[i], i, arr)){
            return false
        }
    }
    return true
}

//some: that returns true if at least one element in the array respects the condition of the function.
function some(arr, func){
    for (let i=0; i<arr.length; i++){
        if (func(arr[i])){
            return true
        }
    }
    return false
}

//none: that returns true if none of the elements in the array respects the condition of the function.
function none(arr, func){
    return!some(arr, func)
}

// const arr = [1, 2, 3, 4, 5]
// console.log(every(arr, (num)=> num % 2 === 0))
// console.log(some(arr, (num)=> num % 2 === 0))
// console.log(none(arr, (num)=> num % 2 === 0))