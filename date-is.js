//isValid: accepts a Date, and returns false if the Date is invalid.
function isValid(date){
    return(date instanceof Date && !isNaN(date.getTime())) || (typeof date === 'number' && !isNaN(date) && date >= 0)
}

// console.log(isValid(new Date('2020-01-01'))); // true
// console.log(isValid(new Date('20203-13-01'))); //false

//isAfter: accepts two Date arguments, and returns true if the first is greater then the second.
function isAfter(date1, date2){
    const d1 = date1 instanceof Date ? date1 : new Date(date1)
    const d2 = date2 instanceof Date? date2 : new Date(date2)

    return isValid(d1) && isValid(d2) && d1.getTime() > d2.getTime()
}
//console.log(isAfter('2020-01-03', '2020-01-02')); // false,

//isBefore: accepts two Date arguments, and returns true if the second is greater than the first.
function isBefore(date1, date2){
    const d1 = date1 instanceof Date ? date1 : new Date(date1)
    const d2 = date2 instanceof Date? date2 : new Date(date2)

    return isValid(d1) && isValid(d2) && d2.getTime() > d1.getTime()

}
//console.log(isBefore('2020-01-03', '2020-01-02')); // false,

//isFuture: accepts a Date, and returns true if the Date is valid, and is after than the present date.
function isFuture(date){
    if(!isValid(date)){
        return false;
    }
    const d = date instanceof Date ? date : new Date(date)
    return isValid(d) && isAfter(d, new Date())
}

//console.log(isFuture('2025-01-01')); // true,

function isPast(date){
    if(!isValid(date)){
        return false;
    }
    const d = date instanceof Date ? date : new Date(date)
    return isValid(d) && isBefore(d, new Date())
}