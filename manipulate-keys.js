//reduce function for objects
function reduceKeys(obj, func, initialVal) {
const keys = Object.keys(obj)
let res = initialVal !== undefined ? initialVal :  keys[0]
const startIndex  = initialVal !== undefined ? i0: 1
for (let i = startIndex; i < keys.length;i++){
    res = func(res, keys[i], i, keys)
}
return res
    }
    
    //filter: that works like the [].filter method.
    function filterKeys(obj, func){
      const  res = {}
      for(const [key, value] of Object.entries(obj)){
        if(func(key, value, obj)){
            res[key] = value
        }
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
    // usage
    // const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

    // console.log(filterKeys(nutrients, (key) => /protein/.test(key)))
    // // output: { protein: 20 }
    
    // console.log(mapKeys(nutrients, (k) => `-${k}`))
    // // output: { -carbohydrates: 12, -protein: 20, -fat: 5 }
    
    // console.log(reduceKeys(nutrients, (acc, cr) =>acc.concat(', ', cr)))
    // // output: carbohydrates, protein, fat
    