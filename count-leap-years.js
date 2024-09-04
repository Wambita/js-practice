//return the number of leap years to have taken place since the year 1.
function countLeapYears(date) {
    const year = date.getFullYear();
    let count = 0;
    for (let i = 1; i < year; i++) {
        if (isLeapYear(i)) {
            count++;
        }
    }
    return count;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0
}
//console.log(countLeapYears(new Date('1664-08-09')));