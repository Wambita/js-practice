const vowels = /[aeiou]/gi

function vowelDots(str) {
    let result = '';

    for (var i=0; i<str.length; i++) {
        if (vowels.test(str[i])) {
            result += str[i] + '.';
        } else {
            result += str[i];
        }
    }
    return result
}