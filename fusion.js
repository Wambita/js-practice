// merge objects into a new object depending on the values type.
//  function named fusion that:

function fusion(obj1, obj2){
    const newObj = {};
    //iterate through keys in obj1 and obj2 
    const keys = new Set ([...Object.keys(obj1), ...Object.keys(obj2)])

    keys.forEach((key) =>  {

    const  val1 = obj1[key];
    const  val2 = obj2[key];

    //     For array types, you will concatenate them.
    if(Array.isArray(val1) && Array.isArray(val2)) {
        newObj[key] = [...val1,...val2];
    }

    //For strings, you must concatenate them with a space.
    else if(typeof val1 ==='string' && typeof val2 ==='string') {
        newObj[key] = val1 +' ' + val2;
    }

    //For numbers, you must add them.
    else if(typeof val1 ==='number' && typeof val2 ==='number') {
        newObj[key] = val1 + val2;
    }

    //For objects, you must join them recursively.
    else if(typeof val1 ==='object' && typeof val2 ==='object') {
        newObj[key] = fusion(val1, val2);
    }

    //In case of type mismatch you must replace it with the value of the second object (if it exists).
    else {
        newObj[key] = val2 !==  undefined ? val2 : val1}
    
})
    return newObj;
}

//test
// console.log(fusion({ arr: [1, "2"] }, { arr: [2] })); 

// console.log(fusion({ str: "salem" }, { str: "alem" })); 

// console.log(fusion({ a: 10, b: 8, c: 1 }, { a: 10, b: 2 })); 

// console.log(fusion({ a: 1, b: { c: "Salem" } }, { a: 10, x: [], b: { c: "alem" } })); 

// console.log(fusion({ a: "hello", b: [] }, { a: 4 })); 



