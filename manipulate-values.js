//reduce function for objects
function reduceValues(obj, func, initialVal) {
let entries = Object.entries(obj)
let res
let startIndex = 0

//if initail val is provses, set it as  the starting accumulator
if(initialVal !== undefined) {
    res = initialVal
} else {
    res = entries[0][1]
    startIndex = 1
}
for(let i = startIndex; i < entries.length; i++) {
    const[key, value] = entries[i]
    res = func(res, value, key, obj)
}
    return res
}

//filter: that works like the [].filter method.
function filterValues(obj, func){
  let res = {}
  for(let key in obj){
    if(func(obj[key], key, obj)){
        res[key] = obj[key]
    }
  }
    return res
}

//map function for  objects
function mapValues(obj, func){
    let res = {}
    for (let key in obj){
      res[key] = func(obj[key], key, obj)
    }
    return res
}
// usage
// const nutrients = { carbohydrates: 12, protein: 20, fat: 5 }

// console.log(filterValues(nutrients, (nutrient) => nutrient <= 12))
// // output: { carbohydrates: 12, fat: 5 }

// console.log(mapValues(nutrients, (v) => v+1))
// // output: { carbohydrates: 13, protein: 21, fat: 6 }

// console.log(reduceValues(nutrients, (acc, cr) => acc + cr))
// // output: 37