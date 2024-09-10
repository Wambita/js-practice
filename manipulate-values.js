//reduce function for objects
function reduceValues(obj, func) {
    let keys = Object.keys(obj)
    let res = obj[keys[0]]
    for (var i = 1; i < keys.length; i++) {
        let key = keys[i]
        res = func(res, obj[key], i, obj)
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