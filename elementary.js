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

    for (var i=a-1; i >= 0; i-=b) {
        a = a - b
        count ++
    }
    return count
}


function modulo(a,b){
 for (var i=a; i >=b; i-=b) {
        a  =a- b
    }
    return a
}

console.log(multiply(123, -22))

