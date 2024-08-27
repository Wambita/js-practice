//convert array to a set 
function arrToSet(arr ) {
    return new Set(arr);
}

//convert array to string
function arrToStr(arr){
    return arr.join('');
}

//convert set to array
function setToArr(set) {
    return [...set];
}

//convert set to string
function setToStr(set){
    return[...set].join(' ');
}

//convert string to array
function strToArr(str) {
    return str.split(' ');
}

//convert string  to set
function strToSet(str) {
    return new Set(str)
}

//convert map to object
function mapToObj(map){
    return Object.fromEntries(map)
}

//convert an  object to  an array 
function  objToArr(obj){
    return  Object.values(obj)
}

//convert object to map
function objToMap(obj){
    return new Map(Object.entries(obj))
}

//convert array to object
function arrToObj(arr){
    return arr.reduce((accumulator, curr, i) => {
        accumulator[i] =curr;
        return accumulator;
    } , {})
}

//convert string to obj
function strToObj(str) {
    str = str.split(' ')
    return str.reduce((acc, char, i) =>{
        acc[i] = char
        return acc;
    }, {})
}

//specific type of input
function superTypeOf(val) {
    if (val === null) return 'null';
    if (val instanceof Array) return 'Array';
    if (val instanceof Set) return 'Set';
    if (val instanceof Map) return 'Map'
    return typeof value
}

//console.log(arrToStr(['my', 'name', 'js']))
// // Examples
// const str = 'hello';
// const arr = [1, 2, 1, 3];
// const obj = { x: 45, y: 75, radius: 24 };
// const set = new Set([1, 2, 1, 3]);
// const map = new Map([['a', 1], ['b', 2], [3, 'c'], [4, 'd']]);

// console.log(arrToSet(arr)); // -> Set { 1, 2, 3 }
// console.log(arrToStr(arr)); // -> '1213'
// console.log(setToArr(set)); // -> [1, 2, 3]
// console.log(setToStr(set)); // -> '123'
// console.log(strToArr(str)); // -> ['h', 'e', 'l', 'l', 'o']
// console.log(strToSet(str)); // -> Set { 'h', 'e', 'l', 'o' }
// console.log(mapToObj(map)); // -> { a: 1, b: 2, '3': 'c', '4': 'd' }
// console.log(objToArr(obj)); // -> [45, 75, 24]
// console.log(objToMap(obj)); // -> Map { 'x' => 45, 'y' => 75, 'radius' => 24 }
// console.log(arrToObj(arr)); // -> { '0': 1, '1': 2, '2': 1, '3': 3 }
// console.log(strToObj(str)); // -> { '0': 'h', '1': 'e', '2': 'l', '3': 'l', '4': 'o' }
// console.log(superTypeOf(map)); // -> 'Map'
// console.log(superTypeOf(set)); // -> 'Set'
// console.log(superTypeOf(obj)); // -> 'Object'
// console.log(superTypeOf(str)); // -> 'String'
// console.log(superTypeOf(666)); // -> 'Number'
// console.log(superTypeOf(NaN)); // -> 'Number'
// console.log(superTypeOf(arr)); // -> 'Array'
// console.log(superTypeOf(null)); // -> 'null'
// console.log(superTypeOf(undefined)); // -> 'undefined'
// console.log(superTypeOf(superTypeOf)); // -> 'Function'
