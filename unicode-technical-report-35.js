//format which accepts a valid Date and a format string. Your function should return a correctly formatted string.
function format(date, format) {
    if (typeof date ==='string') {
        date = new Date(date)
    }

    const formatMap = {
        'y': () =>Math.abs(date.getFullYear()) %100, //last two digits
        'yyyy': () =>String(Math.abs(date.getFullYear())).padStart(4,0), //full year
        'G': () => date.getUTCFullYear() < 0 ? 'BC' : 'AD', //year type
        'GGGG': () => date.getUTCFullYear() < 0, //bc
        'M' : () => date.getMonth() + 1, //month1 to 12
        'MM': () => String(date.getMonth()+1).padStart(2, '0'), //short
        'MMM' : () => date.toLocaleString('default', {month: 'short'}),
        'MMMM' :() => date.toLocaleString('default', {month: 'long'}),
        'd' : () => date.getDate(), //day1 to 31
        'dd': () => String(date.getDate()).padStart(2, '0'), //short
        'E' : () => date.toLocaleString('default', {weekday: 'short'}),
        'EEEE' : () => date.toLocaleString('default', {weekday: 'long'}),
        'h' : () => date.getHours() % 12 || 12, //hours 1-12
        'hh': () => String(date.getHours() % 12 || 12).padStart(2, '0'), //short
        'H' : () => date.getHours(), //hours 0-23
        'HH': () => String(date.getHours()).padStart(2, '0'), //short
        'm' : () => date.getMinutes(), //minutes 0-59
        'mm': () => String(date.getMinutes()).padStart(2, '0'), //short
        's' : () => date.getSeconds(), //seconds 0-59
        'ss': () => String(date.getSeconds()).padStart(2, '0'), //short
        'a' : () => date.getHours() < 12? 'AM' : 'PM', //AM/PM
    }

    //replace the format in the string
    return format.replace(/(yyyy|y|GGGG|G|MMMM|MMM|MM|M|dd|d|EEEE|E|hh|h|HH|H|mm|m|ss|s|a)/g, match  => {
        return formatMap[match] ? formatMap[match]() : match
    })
}

//const d = new Date('7 January 1985, 3:08:19')
//console.log(format(d, 'HH(mm)ss [dd] <MMM>'))
//console.log((format(eclipse, 'y')))