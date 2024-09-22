
// //callback
// function func1(callback) {
//     setTimeout(() => {console.log("Fetching  Your songs...");
//     callback()}, 2000)
//     // setTimeout(() => console.log("Music is Theraputic..."), 2000)
//     // setTimeout(() => console.log("Almost There..."), 4000)
//     // setTimeout(() => console.log("Finished Enjoy..."), 5000)
// }

// function func2(){
// console.log("Welcome")
// console.log("Track1 ")
// console.log("Track2 ")
// console.log("Track3")
// }

// func1(func2)

//callback
hello(wait)

function hello(callback){
        console.log("Hello");
  callback()
 
}

function wait(){
    console.log("Wait 3 seconds")
}

function leave (){
    console.log(leave)
}

function goodbye(){
    console.log("Goodbye")
}

//example3
sum(displayDOM, 3,6)

function sum(callback, x, y){
    let res = x +y 
    callback(res)
}

function displaye(res){
    console.log("Result is : " + res)
}
function displayDOM(res){
    document.getElementById("myh1").textContent =res
}