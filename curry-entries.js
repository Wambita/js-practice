//defaultCurry, which curries two objects. It mergers the objects together. If the key exists in both objects, the value from the second object override the value from the first object.


function defaultCurry(obj1){
    return(obj2) =>{
        let res = {}
        for (const  prop in obj1){
                res[prop] = obj2[prop] || obj1[prop]
        }
            for (const prop in obj2){
                if(!(prop in obj1)){
                    res[prop] = obj2[prop]
                }
        }
        return res
    }
}

//mapCurry, which replicates function .map (but for an object). The first entry is the function, and the second entry is the object.
const mapCurry = (func) => (obj) => {
    let res = {}
    for (let [prop, val] of Object.entries(obj)) {
        const mapped = func([prop, val])
        res[mapped[0]] = mapped[1]
    }
    return res
}

//reduceCurry, which replicates the .reduce method (but from an object). The first entry is the function, and the second is the object and initial value).
const reduceCurry = (func) => {return (obj, initial) => {return Object.entries(obj).reduce((acc, [key, value]) => {return func(acc, [key, value], initial)}, initial)}}
function filterCurry(func) {
return (obj) => {
    let arr = Object.entries(obj).filter((entry) => func(entry))
    return Object.fromEntries(arr)
}
}
const reduceScore = reduceCurry((acc, [prop, value]) => {
if (value.isForceUser) {
    return acc + value.pilotingScore + value.shootingScore
}
return acc
})
//filterCurry which replicates the .filter method (but for an object). The first entry is the function, and the second is an object.
const filterForce = filterCurry(([p, v]) => v.isForceUser && v.shootingScore >= 80)
const mapAverage = mapCurry(([p, v]) => {
return [
    p,
    {
        ...v,
        averageScore: (v.pilotingScore + v.shootingScore) / 2
    }
]
})
