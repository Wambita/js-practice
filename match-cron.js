//matchCron, which accepts a valid cron string, and a valid Date. Your function should return true if the pattern matches the Date
function matchCron(cron, date) {
    let cronParts = Array.isArray(cron)? cron : cron.split(' ');;

//check each cron part
for (let i = 0; i < cronParts.length; i++) {
    if(i===0) {
        //minutes
        let mins = date.getMinutes();
        if (cronParts[i] !== '*' && mins !== parseInt(cronParts[i])) {
            return false;
            }
} else if(i===1) {
    //hours
    let hours = date.getHours()
    if (cronParts[i] !== '*' && hours !== parseInt(cronParts[i])) {
        return false;
}
} else if(i === 2){
    //datemonth
    let dayOfMonth = date.getDate();
    if (cronParts[i] !== '*' && dayOfMonth !== parseInt(cronParts[i])) {
        return false;

}
    } else if(i === 3){
        //month
        let month = date.getMonth() + 1;
        if (cronParts[i] !== '*' && month !== parseInt(cronParts[i])) {
            return false;
}
    } else if(i === 4){
        //weekday
        let dayOfWeek = date.getDay();
        if (cronParts[i] !== '*' && dayOfWeek !== parseInt(cronParts[i])) {
            return false;
}
}
}

return true;
}
//console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));