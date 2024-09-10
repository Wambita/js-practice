//reduce function for objects
function reduceKeys(obj, func, initialVal) {
let entries = Object.entries(obj)
let res
let startIndex = 0

if(initialVal !== undefined) {
    res = initialVal
} else {
    res = entries[0][0]
    startIndex = 1
}

for(let i = startIndex; i < entries.length; i++) {
    const [key, value] = entries[i]
    res = func(res, key, value, obj)
}
        return res
    }
    
    //map function for  objects
    function mapKeys(obj, func){
        const res = {}
        for(const [key, value] of Object.entries(obj)){
            const newKey = func(key, value, obj)
          res[newKey] = value
        }
        return res
    }

    //filterKeys
    function filterKeys(obj, func){
        const res = {}
        for(const [key, value] of Object.entries(obj)){
            if(func(key, value, obj)){
                res[key] = value
            }
        }
        return res
    }
    // usage
    // const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

    // console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
    // // output: { protein: 20 }
    
    // console.log(mapKeys(nutrients, (k) => `-${k}`))
    // // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }
    
    // console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
    // // output: carbohydrates, protein, fat
    