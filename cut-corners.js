function round(num){
    const intpart = getIntPart(num)
    const dec = num - intpart

    if (Math.abs(dec) >= 0.5){
        return intpart + 1
    } 
        return intpart
}


function ceil (num){
    if (num >= 0) {
        const intpart = getIntPart(num)
        return  num > intpart ?  intpart +1 : intpart
    } else {
        return -getIntPart(-num)
    }
    }
   

function floor(num){
   const intpart = getIntPart(num)
   return num < intpart ? intpart -1 : intpart
}

function trunc(num){
return  num  >= 0  ? getIntPart(num) : -getIntPart(-num)
}

function getIntPart(num) {
    let sign = num >= 0 ? 1 : -1
    num = Math.abs(num)
    var res = 0
    var pla = 1
    while(pla <= num){
        pla *= 10
    }
    pla /= 10
    while(pla >= 1){
       while(res + pla <= num){
        res += pla
       }
       pla /= 10
    }
    return res * sign
  }

// console.log(trunc(3, ))
// console.log(trunc(-4))
// console.log(trunc( 2))
// console.log(trunc(-3))
// console.log(trunc(0))



//console.log (ceil(-3.7))
// console.log (getDectimal(4.1))
// console.log (round(1234.56))
// console.log (round(-4.1))
// console.log (floor(0.1234))
// console.log (ceil(4.1))
// console.log (trunc(1234.56))
// console.log (round(-4.1))