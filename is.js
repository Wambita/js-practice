const is = {}

//check if  value is a number using typeof and strict equal
is.num =  function(n) {
    return typeof n === 'number'
}

//chaeck if value is not a  number using Number.isNan
is.nan = function(n)  {
    return Number.isNaN(n)
}

//check if value is  string using typeof and strict equal
is.str = function(s) {
    return typeof s === 'string'
}

//check if value is a boolean using typeof and strict equal
is.bool = function(b) {
    return typeof b === 'boolean'
}

//check if value is undefined using typeof and strict equal
is.undef = function (n) {
    return typeof n === 'undefined'
}

//check if value is  defined by checking the  is the  typeof is not undefined
is.def = function(n) {
    return typeof n !== 'undefined'
}

//check if valu
is.arr = function(arr){
    return Array.isArray(arr)
}

//checkif the  value is a simple  object or null  object  //type of array is object
is.obj = function(obj){
    return  obj !=null  || (typeof obj === 'object' && !Array.isArray(obj))
}

//chack if value is function using typeof and stric t equal 
is.fun = function(func){
    return typeof func === 'function'
}

//check if value is truthy
is.truthy = function(n) {
    return !!n
}

//check if value is falsy 
is.falsy = function(n) {
    return !n
}


// // Example usage
// console.log(is.num(5));         // true
// console.log(is.nan(NaN));       // true
// console.log(is.str("hello"));   // true
// console.log(is.bool(false));    // true
// console.log(is.undef(undefined)); // true
// console.log(is.def(42));        // true
// console.log(is.arr([1, 2, 3])); // true
// console.log(is.obj({}));        // true
// console.log(is.obj(null));      // true
// console.log(is.fun(function() {})); // true
// console.log(is.truthy(1));      // true
// console.log(is.falsy(0));     