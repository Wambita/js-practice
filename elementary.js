function multiply  (a,b ){
    let result = 0;
    let isneg = false;
    if (b < 0) {
        isneg = true;
        b = -b
    }
    for (var i=0; i <b; i++) {
        result += a
    }
    if (isneg ) {
        return  -result
    }

    return result
}


function divide (a,b) {
    let count = 0 ;
if (a === 0 ){
    return 0
} else if (b === 0) {
    return "Error: Division by zero"
}

const allneg = (a < 0) === (b <0)
    if (b > a) {
        return 0
    }
    for (var i=a-1; i >= b; i-=b) {
        a = a - b
        count ++
    }
    return count
}


function modulo(a,b){
    if  (b > a) {
        return 0
    }
 for (var i=a; i >=b; i-=b) {
        a  =a- b
    }
    return a
}

console.log(multiply(123, -22))
 console.log(divide(78, 34))

