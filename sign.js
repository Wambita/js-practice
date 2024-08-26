function sign (n) {
    if (n < 0 ){
        return -1;
    } else if (n > 0) {
        return 1;
    } else {
        return 0;
    }
}


function sameSign(a,b) {
 if (sign(a) === sign(b)) {
    return true;
 } else {
    return false;
 }
}

// console.log(sign(5))
// console.log(sign(-5))
// console.log(sameSign(-2,3))