//Create the function currify that will curry any functions put as argument.
function currify(func){
    return function curried(...num) {
        if (num.length >= func.length){
            return func(...num)
        } else {
            return function(...nextnum){
                return curried(...num,...nextnum)
            }
        }
    }
}

// // Example usage:
// const mult2 = (num1, num2) => num1 * num2;
// const mult2Curried = currify(mult2);
// console.log(mult2Curried(2)(2)); 
