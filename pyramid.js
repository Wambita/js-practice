function pyramid(char, depth) {
    if (depth === 0) {
        return ''
    }
    let res  = ''
    for (var i = 0; i < depth; i++) {
    let spaces = ' '.repeat(depth -i +1)
      let chars = char.repeat(2 * i+1 ) 
        res += spaces + chars
        if ( i !== depth-1){
            res += '\n'
        }
    }
return res
}


//console.log(pyramid('*', 4))