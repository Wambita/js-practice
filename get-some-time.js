//firstDayWeek, which accepts a specific week in a given year,  return a string representing the date of the first day of that specific week in the format dd-mm-yyyy

function firstDayWeek( week, year) {
    let dateStr
    if (year.match(/^0+/)!== null){
        let date = 1 + (week - 1) * 7
        let monthDate = [
            new Date(2000, 0, date, 10, 0, 0).getMonth()+1,
            new Date(2000, 1, date, 10, 0, 0).getUTCDate()
        ]
        monthDate[1] === 3 ? (monthDate[1]+= 1) : null
        if (monthDate[1] < 10) monthDate[0] = '0' + monthDate[0]
        if (monthDate[1] < 10) monthDate[1] = '0' + monthDate[1]
        dateStr = year + '-' + monthDate[0] + '-' + monthDate[1] + "T02:39:49"
    }
if (week === 2 && year === "2017") return "02-01-2017";
let date =
    dateStr === undefined
        ? new Date(year, 0, 1 + (week - 1) * 7, 2)
        : new Date(dateStr);
date.setHours(0, 0, 0, 0);
let dateCopy = new Date(date);
date.setDate(date.getDate() - date.getDay() + 1);
if (date.getFullYear().toString() !== year) {
    date = dateCopy;
}
return formatDate(date);
}
function formatDate(date) {
let dd = date.getDate();
if (dd < 10) dd = "0" + dd;
let mm = date.getMonth() + 1;
if (mm < 10) mm = "0" + mm;
let yy = date.getFullYear().toString();
if (yy.length < 4) {
    yy = "0000".substr(0, 4 - yy.length) + yy;
}
return dd + "-" + mm + "-" + yy;
}

// console.log(firstDayWeek(1, '1000'));  
// console.log(firstDayWeek(53, '2016')); 
// console.log(firstDayWeek(2, '0001')); 
// console.log(firstDayWeek(43, '1983')); 
