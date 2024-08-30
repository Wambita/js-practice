function flat(arr, depth = 1) {
    let result = [];

    arr.forEach( item => {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(flat(item, depth - 1));
    } else {
        result.push(item);
    }
});
return result
}

//console.log(flat([1, [2, 3], [4, [5, 6]]], 1));

//console.log(flat([1, [2, 3], [4, [5, 6]]], 2));
