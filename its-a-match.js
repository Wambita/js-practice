//normal: matches with the expression 'hi'.
var normal = /hi/

//begin: matches with the expression 'hi', only when it is at the beginning.
var begin = /\bhi/

//end: matches with the expression 'hi', only when it is at the end.
var end = /hi\b/

//beginEnd: matches with the expression 'hi', only when it is exactly hi.
var beginEnd = /\bhi\b/