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

    // Format the date in dd/mm/yyyy with leading zeros
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = String(date.getFullYear()).padStart(4, '0'); // Ensure year is 4 digits
    const formattedDate = `${day}/${month}/${year}`;
    
    return `${formattedDate} is a ${dayOfWeek}`;
}

//console.log(sunnySunday(new Date('2022-01-01'))); // sat
//console.log(sunnySunday(('0001-01-01'))); // Output: 'Today is Monday'
