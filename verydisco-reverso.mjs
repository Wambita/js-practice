#!/usr/bin/env node;

//script that
/*
takes the name of a file (with the extension) as a first argument
reads this file
deciphers the content of this file by reversing it from the very disco mode
prints the result in the console
*/

import fs from 'fs/promises'

function reverseDisco(word){
    const mid = Math.floor(word.length / 2);
    return word.slice(mid) + word.slice(0, mid); 
}

//process input
function inputDisco(input){
    return input.split(' ').map(veryDisco).join(' ')
}

async function readFile(file){
    try{
        const content = await fs.readFile(file, 'utf-8')
        const reversed = inputDisco(content.trim())
        console.log(reversed)
    } catch(error){
        console.error(`Error reading file:`, error)
        process.exit(1)
    }
}

const file = process.argv[2]
if(!file){
    console.errot('Please provide a file name.')
    process.exit(1)
}

readFile(file)