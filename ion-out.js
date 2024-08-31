//regex look arounds
// that receives a string and returns an array with every word containing 'ion' following a 't'. The words should be returned without the 'ion' part.
const regex = /\b\w*tion\b/g

function  ionOut(str){
    let match = str.match(regex);
    let res = []
    if (match) {
        for(var i=0; i<match.length; i++){
            res.push(match[i].slice(0, -3))
    
    }
}
return res
}