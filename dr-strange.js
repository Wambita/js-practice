function addWeek(date){
    const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'];

    const dayIndex = Math.floor((date.getTime() - new Date('0001-01-01').getTime()) / (1000 * 60 * 60 * 24)) % 14;

    return weekDays[dayIndex];
}

function timeTravel({date, hour, minute, second}){
    const newDate = new Date(date)
    newDate.setHours(hour)
    newDate.setMinutes(minute)
    newDate.setSeconds(second)
    return newDate
}
// console.log(addWeek(new Date('0001-01-01'))); // Output: Monday
// console.log(addWeek(new Date('0001-01-02'))); // Output: Tuesday
// console.log(addWeek(new Date('0001-01-07'))); // Output: Sunday
// console.log(addWeek(new Date('0001-01-08'))); // Output: secondMonday
// console.log(addWeek(new Date('0001-01-09'))); // Output: secondTuesday

// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString()); // Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
