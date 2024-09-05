//filter: that works like the [].filter method.
function filter(arr, func){
    let res = []
    for (let i=0; i<arr.length; i++){
        if (func(arr[i],i,arr)){
            res.push(arr[i])
        }
    }
    return res
}

//reject: that works like the reject function from lodash.
function reject(arr, func){
   let res = []
   for( let i=0; i<arr.length; i++){
    if(!func(arr[i], i, arr)){
        res.push(arr[i])
    }
   }
   return res
}

//partition: that works like the partition function from lodash.
function partition(arr, func){
    let res = []
    let result  = []
    for(let i=0; i<arr.length; i++){
        if (func(arr[i], i, arr)){
            res.push(arr[i])
        } else {
            result.push(arr[i])
        }
    }
    return [res, result]
}

// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(filter(arr, (num)=> num %2 === 0))
// console.log(reject(arr, (num)=> num %2 === 0))
// console.log(partition(arr, (num)=> num %2 === 0))