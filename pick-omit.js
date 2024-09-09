/*Create two functions which takes an object and a string or array of strings. They should return a new object which:
*/

//   pick: contains only those keys which appear in the string or array of strings.
function  pick(obj, str){
    const newObj = {}

    //convert string to array if not array
   if(!Array.isArray(str)){
    str = [str]
   }

   for(var key in obj){
    if(obj.hasOwnProperty(key) && str.includes(key)){
        newObj[key] = obj[key];
    }
   }
    return newObj;
}

//omit: contains only those keys which do not match the string, or do not appear in the array of strings.
function omit (obj, str){
    const newObj = {};
    if(!Array.isArray(str)){
        str = [str]
    }

    for(let key in  obj){
        if(obj.hasOwnProperty(key) && !str.includes(key)){
            newObj[key] = obj[key];
        }
    }
return newObj
}

// const person = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York',
//     job: 'Engineer'
//   };
// console.log(pick (person, ['name', 'age']) )
// console.log(omit(person, 'name') )