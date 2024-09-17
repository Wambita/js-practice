//script to write result from veryDisco function to a txt file 

import {writeFile } from 'fs/promises'

//disco function
function veryDisco(word){
    const mid = Math.ceil(word.length/2)
    return word.slice(mid) + word.slice(0, mid)
}


//process input
function inputDisco(input){
    return input.split(' ').map(veryDisco).join(' ')
}
 async function writeToFile(string){
    try {
        await writeFile('verydisco-forever.txt', string)
        console.log('result written to verydisco-forever.txt')
    } catch (error) {
        console.error('Error writing to file:', error)
        process.exit(1)
    }
 }

 const input = process.argv[2]

 if(!input){
    console.log('Please provide an input string.')
    process.exit(1)
}

const result = inputDisco(input)
writeToFile(result)