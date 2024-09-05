// mult2: that multiplies two numbers.
function mult2(num) {
    return function(num1){
        return num * num1
    }
}
// add3: that adds three numbers.
function add3(num) {
    return function(num1){
        return function(num2){
            return num + num1 + num2
        }
    }
}

// sub4: that subtracts four numbers in the given order: first number minus second number etc.
function sub4(num) {
        return function(num2){
            return function(num3){
                return function(num4){
                    return num -num2 - num3 - num4
                }
            }
    }
}

// // Example usage:
// console.log(mult2(5)(3));  
// console.log(add3(5)(3)(2));
// console.log(sub4(10)(3)(2)(1)); 

