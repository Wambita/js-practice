//string 
const escapeStr =  "`\\/\"'";

//array
const arr = [4, '2'];

//objedt 
const obj = {
   str  : "fana",
   num : 9,
   bool : true,
   undef : undefined
};

//nested
const  nested = {
    arr:  [ 4 , undefined, '2'],
    obj : {
        str : "fana",
        num : 6,
        bool : false
    }

}

//freezing the arrays
Object.freeze(arr);
Object.freeze(obj);
Object.freeze(nested);
Object.freeze(nested.obj);
Object.freeze(nested.arr);
