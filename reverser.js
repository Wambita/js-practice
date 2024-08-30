function reverser (s) {
    let result = Array.isArray(s) ? [] : ''

    for (var i=s.length-1; i>=0; i--) {
        if(Array.isArray(s)){
            result.push(s[i])
        } else {
            result += s[i]
        }
    }
    return result
}