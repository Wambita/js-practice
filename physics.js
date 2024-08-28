function getAcceleration(obj) {
let a;

if(!!obj .f && !!obj.m) {
    a = obj.f/obj.m
} else if (!!obj.Δv && !!obj.Δt){
    a = obj.Δv && obj.Δt
} else if (!!obj.d && !!obj.t){
    a = 2 * obj.d / obj.t * obj.t
} else {
    return "impossible"
}
return a
}


//function getAcceleration(obj){
//  let a;
// if (obj.f !== undefined  && obj.m !== undefined) {
//     //a = f/m
//     a = obj.f/obj.m;
// } else if (obj.Δv !== undefined  && obj.Δt !== undefined) {
//     //a =v/t
//     a = obj.Δv/obj.Δt
// } else if  (obj.d !== undefined && obj.t !== undefined) {
//     //a =d/t
//     a = 2*obj.d/ (obj.t*obj.t)
// }  else {
//     return "impossible"
// }

// return a
//}


// obj = {
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
  
// }
// console.log(getAcceleration(obj))

// function  getAcceleration(obj){
//     return !!obj.f && !!obj.m ? (obj.f/obj.m) :
//                   !!obj.Δv && !!obj.Δt ? (obj.Δv/obj.t):
//                   !!obj.t && !!obj.d ? (2 * obj.d/obj.t * obj.t) :  "impossible"
// }