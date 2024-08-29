function multiply  (a,b ){
    for (var i=0; i <b; i+=b) {
        a += a
    }
    return a
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

console.log(modulo(16, 3))

