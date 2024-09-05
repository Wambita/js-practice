//forEach which takes an array as the first argument, a function as the second argument, and that works like the Array.prototype.forEach method.
function forEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i], i, arr);
    }
    return arr;
}
//example usage
f//orEach([1, 2, 3, 4], (num) => console.log(num)); // logs: 1, 2, 3, 4