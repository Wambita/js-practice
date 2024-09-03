//isFriday: returns true if the Date is a Friday.

function isFriday(date){
    return date.getDay() === 5
}
//console.log(isFriday(new Date('2020-01-01')));

//isWeekend: returns true if the Date is a weekend day.
function isWeekend(date) {
    const day = date.getDay()
    return day === 0 || day === 6
}

//console.log(isWeekend(new Date('2020-01-01')));

//isLeapYear: returns true if the year of the Date is a leap year.
function isLeapYear(date) {
    const year = date.getFullYear()
    return (year % 4 === 0 && year % 100!== 0) || year % 400 === 0
}
//console.log(isLeapYear(2020));

//isLastDayOfMonth: returns true if the Date represents the last day of the month.
function isLastDayOfMonth(date) {
    const nextDay = new Date(date)
    nextDay.setDate(nextDay.getDate() + 1)
    return nextDay.getDate() === 1
}
//console.log(isLastDayOfMonth(new Date('2020-02-29'))) //