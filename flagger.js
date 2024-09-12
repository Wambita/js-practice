function flags(input){
    //create alias object
    const alias = {}
    const description = []

    //add alias for help 
    alias ['h'] = 'help'

    //loop through inpu tobj to map aliases
    for(const key in input){
        if(key !== 'help') {
            const shortFlag = key[0]
            alias[shortFlag] = key
        }
    }

    //if help not present, return desc of all flags
    if(!input.help){
        for(const key in input){
            if(key !== 'help'){
                const shortFlag = key[0]
                description.push(`-${shortFlag}, --${key}: ${input[key]}`);
            }
        }
    } else{
        input.help.forEach(flag => {
            const shortFlag = flag[0]
            if(input[flag]){
                description.push(`-${shortFlag}, --${flag}: ${input[flag]}`);
            }
        })
    }
    return {
        alias,
        description: description.join('\n'),
    }
}

// Example usage:
// const input = {
//     multiply: 'multiply the values',
//     divide: 'divides the values',
//     help: ['divide']
//   };
  
//   console.log(flags(input));
  