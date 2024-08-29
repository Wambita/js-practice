function multiply (a, b) {
    if((a ===0) || (b ===0)) {
        return 0
    }

    const allneg = (a <0 ) === (b <0)
    b = Math.abs(b)
    a = Math.abs(a)
    let res = 0;
    for (var i=0; i<b; i++){
        res += a
    }

    if (allneg) {
        return res
    }
    return -res
}


function divide (a, b) {
    if(b === 0) {
        return ('Cannot divide by zero')
    } else if  (a === 0) {
        return 0
    }
    const allneg = (a <0 ) === (b <0)
    b = Math.abs(b)
    a = Math.abs(a)
    let count = 0;
    while(a  >b) {
        a -= b
        count ++
    }
    if (allneg) {
        return count
    }
  return -count
}

function modulo(a, b ){
    let quotient = divide(a,b)
    modulo = a - multiply(quotient,b)
    return modulo
}

//console.log(modulo(21, 6))