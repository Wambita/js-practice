//that accepts a string; returning an array with every instance of a letter, followed by a space, followed by a number, only if that number has only one digit, and is not followed by any letter

function letterSpaceNumber(string) {
    const regexp = /\w\s\d(?!\w)/g

    let matches = string.match(regexp)

    return matches ? matches : []
}
//console.log(letterSpaceNumber('example 1, example 20'))