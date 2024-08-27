const sub5  = (n) =>  n-5
const sun  = (n, m ) =>  m -n 
const getFirst = (n) =>  n[0]
const getSecond = (n) =>  n[1]
const getLast  = (n) => n[n.length-1]
const over0 = (n) => Math.max(n, 0)
const notOver9000 = (n) => Math.min(n,9000)
const clamp = (n) => Math.min(Math.max(n,0), 9000)

// Function: sub5 (Subtract 5 from the given number)
console.log(sub5(10));  // Output: 5
console.log(sub5(0));   // Output: -5
console.log(sub5(-3));  // Output: -8

// Function: sun (Subtract n from m)
console.log(sun(5, 10)); // Output: 5
console.log(sun(10, 5)); // Output: -5
console.log(sun(-5, 5)); // Output: 10

// Function: getFirst (Get the first element of an array)
console.log(getFirst([1, 2, 3]));  // Output: 1
console.log(getFirst(['a', 'b', 'c'])); // Output: 'a'
console.log(getFirst([true, false, true])); // Output: true

// Function: getSecond (Get the second element of an array)
console.log(getSecond([1, 2, 3]));  // Output: 2
console.log(getSecond(['a', 'b', 'c'])); // Output: 'b'
console.log(getSecond([true, false, true])); // Output: false

// Function: getLast (Get the last element of an array)
// Fixing the syntax issue in getLast function

console.log(getLast([1, 2, 3]));  // Output: 3
console.log(getLast(['a', 'b', 'c'])); // Output: 'c'
console.log(getLast([true, false, true])); // Output: true

// Function: over0 (Ensure the number is not less than 0)
console.log(over0(5));   // Output: 5
console.log(over0(-3));  // Output: 0
console.log(over0(0));   // Output: 0

// Function: notOver9000 (Ensure the number is not more than 9000)
console.log(notOver9000(5000));  // Output: 5000
console.log(notOver9000(10000)); // Output: 9000
console.log(notOver9000(9000));  // Output: 9000

// Function: clamp (Clamp the value between 0 and 9000

console.log(clamp(5000));  // Output: 5000
console.log(clamp(-100));  // Output: 0
console.log(clamp(10000)); // Output: 9000


//using ===  strict  equality
console.log(1 === 1);      // true (same type and value)
console.log(1 === '1');    // false (different types)
console.log(0 === false);  // false (different types)
console.log(null === undefined); // false (different types)


// using == loose equality
console.log(1 == 1);      // true (same value)
console.log(1 == '1');    // true (type coercion: '1' is converted to a number)
console.log(0 == false);  // true (type coercion: `false` is converted to `0`)
console.log(null == undefined); // true (special case where both are considered "empty" values)
