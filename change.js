function  get(obj, key) {
    return(obj[key])
}


function set (obj, key, value) {
    obj[key] = value
    return(obj[key])
}
// // Example usage
// const person = {
//     name: "Alice",
//     age: 25,
//     occupation: "Engineer"
// };

// console.log(get(person, "name"));  
// console.log(set(person, "occupation", "farmer"));