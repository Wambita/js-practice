//normal: matches with the expression 'hi'.
var normal = /hi/

//begin: matches with the expression 'hi', only when it is at the beginning.
var begin = /^hi/

//end: matches with the expression 'hi', only when it is at the end.
var end = /hi$/

//beginEnd: matches with the expression 'hi', only when it is exactly hi.
var beginEnd = /^hi$/

// console.log("normal test:", normal.test("hi"));             // true
// console.log("normal test:", normal.test("hello hi"));       // true
// console.log("normal test:", normal.test("say hi there"));   // true
// console.log("normal test:", normal.test("hibi"));           // true

// console.log("begin test:", begin.test("hi"));               // true
// console.log("begin test:", begin.test("hi there"));         // true
// console.log("begin test:", begin.test("this is hi"));       // false
// console.log("begin test:", begin.test("bhi"));              // false

// console.log("end test:", end.test("hi"));                   // true
// console.log("end test:", end.test("say hi"));               // true
// console.log("end test:", end.test("hi there"));             // false
// console.log("end test:", end.test("hibi"));                 // false

// console.log("beginEnd test:", beginEnd.test("hi"));         // true
// console.log("beginEnd test:", beginEnd.test("hello hi"));   // false
// console.log("beginEnd test:", beginEnd.test("hi there"));   // false
// console.log("beginEnd test:", beginEnd.test("hibi"));       // false
