//adder: accepts an array of numbers, and returns the sum as a number.
function adder(arr) {
    const initialVal = 0
  const sum = arr.reduce(( acc,  current) => acc+ current , initialVal )
    return sum
}

//sumOrMul: accepts an array of numbers and adds or multiplies its elements depending on whether the element is odd or even. Even = multiply. Odd = add.
function sumOrMul(arr) {
    const initialVal = arr[0] % 2 === 0? 1 : 0
    sumOrMul = arr.reduce((acc,  current) => (current % 2 === 0? acc * current : acc + current), initialVal )
    return sumOrMul
}

//funcExec: accepts an array of functions and executes them using reduce, returning the result.
function funcExec(arr) {
    const result = arr.reduce((acc, func) => func(acc), 0)
    return result
}

//console.log(sumOrMul([2,8]))

// const arr = [1,2,3,4]
// const inti  = 0
// const sumwithinit = arr.reduce((acc, curr) => acc + curr, inti)
// console.log(sumwithinit)