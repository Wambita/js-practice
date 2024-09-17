//using node js

function veryDisco(word){
    const mid = Math.ceil(word.length/2)
    return word.slice(mid) + word.slice(0, mid)
}

function inputDisco(input){
    return input.split(' ').map(veryDisco).join(' ')
}

const input = process.argv[2]

if(!input){
    console.log('Please provide an input string.')
    process.exit(1)
}

const result = inputDisco(input)
console.log(result)