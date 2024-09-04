//return the number of leap years to have taken place since the year 1.
function countLeapYears(date) {
    let year = date.getFullYear();
    let count = 0;
    for (let i = 1; i < year; i++) {
        if (isLeapYear(i)) {
            count++;
        }
    }
    return count;
}

function isLeapYear(date) {
    const year = date.getFullYear()
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0
}
console.log(countLeapYears(2020));