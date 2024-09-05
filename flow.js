//Create the function named flow that will act like the _.flow([funcs]) from lodash.
function flow(func) {
    return function(...num) {
        if(num.length > 1){
            num = [func[0](...num)]
        }
        return func.reduce((acc, curr) => curr(acc), num[0])
    }
}

// // Example
// function add(x) {
//     return x + 1;
// }
// function square(x) {
//     return x * x;
// }

// // Now use flow to chain these functions
// const Flow = flow([add,  square]);
// console.log(Flow(3));  
