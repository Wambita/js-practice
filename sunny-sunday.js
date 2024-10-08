//sunnySunday that takes a Date as an argument and returns the weekday as a string.

function sunnySunday(date) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   
    if(typeof date ==='string') {
        date = new Date(date);
    }
   //npo of days sisnce 01/01/0001
   const baseDate = new Date('0001-01-01');
   const diffDays = Math.floor((date - baseDate) / (1000 * 60 * 60 * 24))
   
   //calculate weekday in 6 day format
   const indexDay = (diffDays % 6 + 6) % 6
   const dayOfWeek = daysOfWeek[indexDay];
    
    return `${dayOfWeek}`;
}

//console.log(sunnySunday(new Date('2022-01-01'))); // sat
//console.log(sunnySunday(('0001-01-01'))); // Output: 'Today is Monday'
