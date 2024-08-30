function round(num){
    let isneg = false
    if  (num < 0) {
        num = -num
        isneg = true
    }
let dec = getDectimal(num)
let result = 0
if (dec < 0.5) {
    result = num - dec
}
if (dec >= 0.5) {
    result = num - dec + 1
}
if (isneg) {
    result = -result
}
return result
}


function ceil (num){
    let isneg = false
    if  (num < 0) {
        num = -num
        isneg = true
    }
let dec = getDectimal(num)
let result = 0
result = (num - dec) + 1
if (isneg) {
    return  -result+1
}
return result
}

function floor(num){
    let isneg = false
    if  (num < 0) {
        num = -num
        isneg = true
    }
let dec = getDectimal(num)
let result = 0
result = (num - dec) 
if (isneg) {
    return  -result-1
}
return result
}

function trunc(num){
    let isneg = false
    if  (num < 0) {
        num = -num
        isneg = true
    }
    let intpart = 0
    //get int part by subtracting repeatedly
    while (num >= 1) {
        num -= 1
        intpart += 1
    }
    if (isneg) {
        return  -intpart+1
    }
    return intpart
}

function getDectimal(num)  {
 Math.abs(num)
let intpart = 0
//get int part by subtracting repeatedly
while (num >= 1) {
    num -= 1
    intpart += 1
}
return num
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