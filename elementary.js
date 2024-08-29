const multiply = (a, b) =>  a/(1/b)


function divide (a,b) {
    let count = 0 ;

    for (var i=a-1; i >= 0; i-=b) {
        a = a - b
        count ++
    }
    return count
}


function modulo(a,b){
    return a - Math.floor(a/b)*b
}
