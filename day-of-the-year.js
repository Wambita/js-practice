//dayOfTheYear which accepts a Date. Your function should return the number of days since the first day of that year.
function dayOfTheYear(date) {
    //change str to Date object
    if (typeof date ==='string') {
        date = new Date(date);
    }

    let days = 0

    while(!isFirst(date)) {
        date.setDate(date.getDate()-1)
        days++
    }
return days + 1 //add 1 to include the starting date
}

function isFirst(date){
    return date.getDate() === 1 && date.getMonth() === 0
}

//console.log(dayOfTheYear('2020-02-29'))