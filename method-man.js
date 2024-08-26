function  words(string) {
    return  string.split(' ')
}

function sentence(array){
return array.join(' ')
}

function yell (string){
    return string.toUpperCase() 
}

function whisper(string) {
    return "*" + string.toLowerCase() + "*"
}

function capitalize(string){
    return string.charAt(0).toUpperCase()+string.slice(1).toLowerCase()
}
// console.log(words("canyou see me"))
// console.log(sentence(['this', 'is' , 'as', 'ggod']))
// console.log(yell('hello'))
// console.log(whisper('hello'))
// console.log(capitalize('hello'))